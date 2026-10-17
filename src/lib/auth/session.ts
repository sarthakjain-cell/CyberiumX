import { createClient } from '@/lib/supabase/client';

export interface StudentProfile {
  id: string;
  email: string;
  fullName: string;
  avatarUrl?: string;
}

const DEFAULT_STUDENT_ID = '00000000-0000-4000-a000-000000000001';
const DEFAULT_STUDENT: StudentProfile = {
  id: DEFAULT_STUDENT_ID,
  email: 'cadet@cyberiumx.com',
  fullName: 'CyberiumX Student',
};

// Client-side helper to retrieve active student session
export function getClientStudentSession(): StudentProfile {
  if (typeof window === 'undefined') return DEFAULT_STUDENT;

  try {
    const stored = localStorage.getItem('cx_student_session');
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed && parsed.id) return parsed;
    }
  } catch (e) {
    console.warn('Error reading client student session:', e);
  }

  return DEFAULT_STUDENT;
}

// Client-side helper to persist student session
export function setClientStudentSession(profile: Partial<StudentProfile>): StudentProfile {
  if (typeof window === 'undefined') return DEFAULT_STUDENT;

  const current = getClientStudentSession();
  const updated: StudentProfile = {
    ...current,
    ...profile,
    id: profile.id || current.id || DEFAULT_STUDENT_ID,
  };

  try {
    localStorage.setItem('cx_student_session', JSON.stringify(updated));
    // Also set standard cookie so server-side routes can read it without client JS
    document.cookie = `cx_user_id=${encodeURIComponent(updated.id)}; path=/; max-age=31536000; SameSite=Lax`;
    document.cookie = `cx_student_email=${encodeURIComponent(updated.email)}; path=/; max-age=31536000; SameSite=Lax`;
    document.cookie = `cx_student_name=${encodeURIComponent(updated.fullName)}; path=/; max-age=31536000; SameSite=Lax`;
  } catch (e) {
    console.warn('Error saving student session:', e);
  }

  return updated;
}

// Server-side helper to extract student session from Request headers/cookies
export function getServerStudentSession(req: Request): StudentProfile {
  try {
    const cookieHeader = req.headers.get('cookie') || '';
    const cookies = Object.fromEntries(
      cookieHeader.split(';').map(c => {
        const [k, ...v] = c.trim().split('=');
        return [k, decodeURIComponent(v.join('='))];
      })
    );

    const userId = cookies['cx_user_id'] || DEFAULT_STUDENT_ID;
    const email = cookies['cx_student_email'] || 'cadet@cyberiumx.com';
    const fullName = cookies['cx_student_name'] || 'CyberiumX Student';

    return {
      id: userId,
      email,
      fullName
    };
  } catch (e) {
    return DEFAULT_STUDENT;
  }
}

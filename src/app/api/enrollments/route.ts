import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { getServerStudentSession } from '@/lib/auth/session';
import { courses } from '@/data/courses';

export async function GET(req: Request) {
  try {
    const student = getServerStudentSession(req);
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId') || student.id;

    const supabase = createAdminClient();
    let dbEnrollments: any[] = [];

    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('enrollments')
          .select('*')
          .eq('user_id', userId)
          .eq('status', 'PAID');

        if (!error && data) {
          dbEnrollments = data;
        }
      } catch (err) {
        console.warn('Supabase enrollments fetch note:', err);
      }
    }

    // Map database enrollments to enriched course objects
    const enrolledSlugs = new Set(dbEnrollments.map((e) => e.course_slug));

    // Also check cookies for recently enrolled courses (fast cache)
    const cookieHeader = req.headers.get('cookie') || '';
    courses.forEach(c => {
      const slug = c.link.split('/').filter(Boolean).pop();
      if (slug && cookieHeader.includes(`enrolled_${slug}=true`)) {
        enrolledSlugs.add(slug);
      }
    });

    // If student has no enrollments yet, provide default active course for previewing portal experience
    if (enrolledSlugs.size === 0) {
      // Default to Certified Ethical Hacker (CEH v13) for demo cadets
      enrolledSlugs.add('certified-ethical-hacker-cehv13-ai');
    }

    const enrolledCourses = courses.filter((c) => {
      const slug = c.link.split('/').filter(Boolean).pop();
      return slug && enrolledSlugs.has(slug);
    });

    return NextResponse.json({
      success: true,
      userId,
      enrollments: enrolledCourses,
      count: enrolledCourses.length
    });
  } catch (error: any) {
    console.error('Enrollments fetch error:', error);
    return NextResponse.json({ error: 'Failed to retrieve enrollments' }, { status: 500 });
  }
}

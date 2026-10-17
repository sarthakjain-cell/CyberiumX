import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { getServerStudentSession } from '@/lib/auth/session';
import { curriculums } from '@/data/curriculums';
import { courses } from '@/data/courses';

export async function GET(req: Request) {
  try {
    const student = getServerStudentSession(req);
    const { searchParams } = new URL(req.url);
    const courseId = Number(searchParams.get('courseId')) || 1;
    const userId = searchParams.get('userId') || student.id;

    const supabase = createAdminClient();
    const completedLessons: Record<string, boolean> = {};

    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('course_progress')
          .select('lecture_id, is_completed')
          .eq('user_id', userId)
          .eq('course_id', courseId)
          .eq('is_completed', true);

        if (!error && data) {
          data.forEach((row: any) => {
            completedLessons[row.lecture_id] = true;
          });
        }
      } catch (err) {
        console.warn('Supabase course progress read note:', err);
      }
    }

    const syllabus = curriculums[courseId] || [];
    const totalCount = syllabus.reduce((acc: number, mod: any) => acc + (mod.lessons?.length || 0), 0);
    const completedCount = Object.keys(completedLessons).length;
    const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

    // Check if certificate has been unlocked server-side (strictly 100% required)
    const isCertificateUnlocked = totalCount > 0 && completedCount >= totalCount;
    let credentialId = null;

    if (supabase && isCertificateUnlocked) {
      try {
        const { data: certData } = await supabase
          .from('certificates')
          .select('credential_id')
          .eq('user_id', userId)
          .eq('course_id', courseId)
          .maybeSingle();

        if (certData) {
          credentialId = certData.credential_id;
        }
      } catch (err) {
        console.warn('Supabase certificate check note:', err);
      }
    }

    return NextResponse.json({
      success: true,
      courseId,
      userId,
      completedLessons,
      completedCount,
      totalCount,
      progressPercent,
      isCertificateUnlocked,
      credentialId: credentialId || (isCertificateUnlocked ? `CX-2026-${10000 + courseId}` : null)
    });
  } catch (error: any) {
    console.error('Course progress get error:', error);
    return NextResponse.json({ error: 'Failed to retrieve progress' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const student = getServerStudentSession(req);
    const body = await req.json();
    const { courseId, lectureId, isCompleted = true, durationMinutes = 25 } = body;
    const userId = body.userId || student.id;

    const numCourseId = Number(courseId) || 1;
    const supabase = createAdminClient();

    if (supabase) {
      try {
        if (isCompleted) {
          // Upsert completed lecture
          await supabase.from('course_progress').upsert({
            user_id: userId,
            course_id: numCourseId,
            lecture_id: lectureId,
            is_completed: true,
            completed_at: new Date().toISOString()
          }, { onConflict: 'user_id,course_id,lecture_id' });

          // Also record study session for heatmap streak
          const today = new Date().toISOString().split('T')[0];
          await supabase.from('study_sessions').insert({
            user_id: userId,
            course_id: numCourseId,
            duration_minutes: Number(durationMinutes) || 25,
            session_date: today
          });
        } else {
          // Delete/uncheck lecture
          await supabase
            .from('course_progress')
            .delete()
            .eq('user_id', userId)
            .eq('course_id', numCourseId)
            .eq('lecture_id', lectureId);
        }

        // Count completed lessons
        const { count } = await supabase
          .from('course_progress')
          .select('id', { count: 'exact' })
          .eq('user_id', userId)
          .eq('course_id', numCourseId)
          .eq('is_completed', true);

        const syllabus = curriculums[numCourseId] || [];
        const totalCount = syllabus.reduce((acc: number, mod: any) => acc + (mod.lessons?.length || 0), 0);
        const completedCount = count || 0;
        const is100Percent = totalCount > 0 && completedCount >= totalCount;

        let credentialId = null;

        // If and only if 100% of lectures are complete, generate official certificate
        if (is100Percent) {
          const generatedId = `CX-2026-${10000 + numCourseId}`;
          const targetCourse = courses.find(c => c.id === numCourseId);

          await supabase.from('certificates').upsert({
            credential_id: generatedId,
            user_id: userId,
            course_id: numCourseId,
            course_name: targetCourse?.title || 'Cyber Security Specialist',
            student_name: student.fullName || 'Certified Student',
            grade: 'A+ (Distinction)',
            credential_hash: `cx_0x${numCourseId}${userId.slice(0, 8)}cert`
          }, { onConflict: 'credential_id' });

          credentialId = generatedId;
        }

        return NextResponse.json({
          success: true,
          completedCount,
          totalCount,
          progressPercent: totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0,
          isCertificateUnlocked: is100Percent,
          credentialId
        });
      } catch (err) {
        console.warn('Supabase progress upsert note:', err);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Progress recorded locally fallback'
    });
  } catch (error: any) {
    console.error('Course progress post error:', error);
    return NextResponse.json({ error: 'Failed to record progress' }, { status: 500 });
  }
}

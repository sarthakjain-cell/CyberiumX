import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dbPath = path.join(process.cwd(), 'src', 'data', 'db.json');

function getDbData() {
  try {
    if (!fs.existsSync(dbPath)) {
      const initial = { courses: [], reviews: [] };
      fs.writeFileSync(dbPath, JSON.stringify(initial, null, 2));
      return initial;
    }
    const data = fs.readFileSync(dbPath, 'utf8');
    return JSON.parse(data || '{"courses":[],"reviews":[]}');
  } catch (error) {
    console.error("Error reading db.json:", error);
    return { courses: [], reviews: [] };
  }
}

function saveDbData(data: any) {
  try {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error writing db.json:", error);
  }
}

export async function GET() {
  const data = getDbData();
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const db = getDbData();

    if (body.type === 'ADD_COURSE') {
      const newCourse = {
        id: Date.now(),
        title: body.title,
        description: body.description,
        category: body.category || 'Cybersecurity',
        level: body.level || 'Intermediate',
        duration: body.duration || '4 Weeks',
        price: body.price || '₹4,999',
        imageUrl: body.imageUrl || '/logo.png',
        icon: body.icon || 'shield',
        modules: body.modules || [],
        link: `/provided-course/dynamic-${Date.now()}`
      };
      db.courses.unshift(newCourse);
      saveDbData(db);
      return NextResponse.json({ success: true, course: newCourse });
    }

    if (body.type === 'ADD_REVIEW') {
      const newReview = {
        id: Date.now(),
        courseId: body.courseId,
        courseTitle: body.courseTitle,
        userName: body.userName || 'Anonymous Student',
        rating: body.rating || 5,
        comment: body.comment,
        status: 'PENDING',
        createdAt: new Date().toLocaleDateString()
      };
      db.reviews.unshift(newReview);
      saveDbData(db);
      return NextResponse.json({ success: true, review: newReview });
    }

    if (body.type === 'RESOLVE_REVIEW') {
      db.reviews = db.reviews.map((r: any) => 
        r.id === body.reviewId ? { ...r, status: 'RESOLVED' } : r
      );
      saveDbData(db);
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

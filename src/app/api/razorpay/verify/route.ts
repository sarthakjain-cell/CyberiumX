import { NextResponse } from 'next/server';
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';

const dbPath = path.join(process.cwd(), 'src', 'data', 'db.json');

function recordEnrollment(enrollment: any) {
  try {
    let db: { courses: any[]; reviews: any[]; enrollments: any[] } = { courses: [], reviews: [], enrollments: [] };
    if (fs.existsSync(dbPath)) {
      const content = fs.readFileSync(dbPath, 'utf8');
      db = JSON.parse(content || '{"courses":[],"reviews":[],"enrollments":[]}');
    }
    if (!db.enrollments) db.enrollments = [];
    db.enrollments.unshift(enrollment);
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
  } catch (err) {
    console.error('Error logging enrollment to db.json:', err);
  }
}

export async function POST(req: Request) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, courseSlug, courseTitle } = await req.json();

    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!keySecret) {
      return NextResponse.json({ error: 'Razorpay secret missing' }, { status: 500 });
    }

    // Generate expected signature
    const hmac = crypto.createHmac('sha256', keySecret);
    hmac.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const expectedSignature = hmac.digest('hex');

    const isValid = expectedSignature === razorpay_signature;

    if (isValid) {
      recordEnrollment({
        id: Date.now(),
        orderId: razorpay_order_id,
        paymentId: razorpay_payment_id,
        courseSlug,
        courseTitle: courseTitle || courseSlug,
        timestamp: new Date().toISOString(),
        status: 'PAID'
      });

      return NextResponse.json({ success: true, message: 'Payment verified successfully' });
    } else {
      return NextResponse.json({ error: 'Invalid payment signature' }, { status: 400 });
    }
  } catch (error: any) {
    console.error('Payment verification error:', error);
    return NextResponse.json({ error: 'Internal server error during payment verification' }, { status: 500 });
  }
}

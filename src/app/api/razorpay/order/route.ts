import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { amount, courseId, courseTitle } = await req.json();

    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      return NextResponse.json(
        { error: 'Razorpay API credentials not configured' },
        { status: 500 }
      );
    }

    // Default price fallback if not provided or 0
    const parsedAmount = Number(amount) > 0 ? Number(amount) : 4999;
    const amountInPaise = Math.round(parsedAmount * 100);

    const authString = Buffer.from(`${keyId}:${keySecret}`).toString('base64');

    const response = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${authString}`
      },
      body: JSON.stringify({
        amount: amountInPaise,
        currency: 'INR',
        receipt: `cx_${courseId || 'course'}_${Date.now()}`,
        notes: {
          courseId: String(courseId || ''),
          courseTitle: String(courseTitle || 'CyberiumX Course')
        }
      })
    });

    const orderData = await response.json();

    if (!response.ok) {
      console.error('Razorpay Order Error:', orderData);
      return NextResponse.json(
        { error: orderData.error?.description || 'Failed to create Razorpay order' },
        { status: response.status }
      );
    }

    return NextResponse.json({
      id: orderData.id,
      amount: orderData.amount,
      currency: orderData.currency,
      keyId
    });

  } catch (error: any) {
    console.error('Order creation exception:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}

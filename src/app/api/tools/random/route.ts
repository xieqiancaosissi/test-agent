import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Simulate a coin flip
    const result = Math.random() < 0.5 ? 'name is nature' : 'name is sisi';

    // Return the result
    return NextResponse.json({ result });
  } catch (error) {
    console.error('Error in random name:', error);
    return NextResponse.json({ error: 'Failed to perform random name' }, { status: 500 });
  }
}

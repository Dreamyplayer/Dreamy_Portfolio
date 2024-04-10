import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await new Response(req.body).text();
  console.log('Form data:', data);
  try {
    return NextResponse.json(req.body);
  } catch (error) {
    console.error('Error processing form:', error);
    return NextResponse.json({ error });
  }
}

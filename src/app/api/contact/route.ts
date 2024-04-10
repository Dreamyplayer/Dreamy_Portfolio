import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export async function GET(req: NextApiRequest) {
  const data = await new Response(req.body).text();
  return NextResponse.json({ message: data });
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const data = await new Response(req.body).text();
  console.log('Form data:', data);
  try {
    return NextResponse.json(req.body);
  } catch (error) {
    console.error('Error processing form:', error);
    return NextResponse.json({ error });
  }
}

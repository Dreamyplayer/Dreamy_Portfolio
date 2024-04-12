import { NextRequest, NextResponse } from 'next/server';

import { JSONFilePreset } from 'lowdb/node';

type formType = {
  name: string;
  email: string;
  message: string;
};

const dbFilePath = 'db.json';

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await new Response(req.body).text();
  const { name, email, message }: formType = JSON.parse(data);

  const defaultData = { forms: [{ name, email, message }] };
  const db = await JSONFilePreset(dbFilePath, defaultData);
  await db.update(({ forms }) => forms.push({ name, email, message }));

  console.log('Form data:', data);
  try {
    return NextResponse.json(req.body);
  } catch (error) {
    console.error('Error processing form:', error);
    return NextResponse.json({ error });
  }
}

export async function GET(req: NextRequest, res: NextResponse) {
  const apiKey = req.nextUrl.searchParams.get('api_key');
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return NextResponse.json({ message: 'Unauthorized: Invalid API key' }, { status: 401 });
  }

  const db = await JSONFilePreset(dbFilePath, {});
  await db.read();
  const data = db.data;

  try {
    return NextResponse.json(data, {
      status: 200,
    });
  } catch (error) {
    console.error('Error processing form:', error);
    return NextResponse.json({ error });
  }
}

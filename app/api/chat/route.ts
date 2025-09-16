import { NextRequest, NextResponse } from "next/server";
export const runtime = 'edge';
export async function POST(req: NextRequest) {
  const { message } = await req.json();

  const n8nWebhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;

  if (!n8nWebhookUrl) {
    return NextResponse.json(
      { message: "La URL del webhook de n8n no está configurada." },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(n8nWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.N8N_API_KEY}`,
      },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Lo siento, algo salió mal. Por favor, inténtalo de nuevo." },
      { status: 500 }
    );
  }
}

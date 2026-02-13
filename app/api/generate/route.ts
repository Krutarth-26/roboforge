import { NextRequest, NextResponse } from "next/server";

export const runtime = 'edge'; 

export async function POST(req: NextRequest) {
  try {
    const { prompt, platform } = await req.json();

    const response = await fetch("https://api.mistral.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.ROBOTICS_API_KEY}`,
      },
      body: JSON.stringify({
        model: "mistral-large-latest",
        messages: [
          { 
            role: "system", 
            content: `You are a Robotics Engineer. Return a JSON object with: 
            "code": "full source code", 
            "language": "cpp or python", 
            "wiringGuide": "markdown instructions". 
            Target platform: ${platform}` 
          },
          { role: "user", content: prompt }
        ],
        response_format: { type: "json_object" }
      }),
    });

    const data = await response.json();
    const result = JSON.parse(data.choices[0].message.content);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: "API Error" }, { status: 500 });
  }
}
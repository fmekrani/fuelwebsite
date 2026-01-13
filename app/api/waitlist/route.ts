import { NextRequest, NextResponse } from "next/server";

// In-memory storage (resets on deployment)
// For production, use Vercel KV, Postgres, or Airtable
let waitlistEmails: string[] = [];

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid email address.",
        },
        { status: 400 }
      );
    }

    // Check if already on waitlist
    if (waitlistEmails.includes(email)) {
      return NextResponse.json(
        {
          success: true,
          message: "You're already on the waitlist!",
        },
        { status: 200 }
      );
    }

    // Add to waitlist
    waitlistEmails.push(email);
    console.log(`✅ New signup: ${email}`);
    console.log(`📊 Total: ${waitlistEmails.length}`);

    return NextResponse.json(
      {
        success: true,
        message: "Thanks for joining! We'll notify you when we launch.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}

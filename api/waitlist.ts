import { VercelRequest, VercelResponse } from '@vercel/node';

// In-memory storage for demo (resets on each deployment)
// For production, use Vercel KV, Postgres, or Airtable
let waitlistEmails: string[] = [];

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Method not allowed' 
    });
  }

  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ 
      success: false, 
      message: 'Please provide a valid email address.' 
    });
  }

  try {
    // Check if email already exists
    if (waitlistEmails.includes(email)) {
      return res.status(200).json({ 
        success: true, 
        message: 'You\'re already on the waitlist!' 
      });
    }

    // Add new email
    waitlistEmails.push(email);

    // Log to Vercel logs (viewable in Vercel dashboard)
    console.log(`✅ New waitlist signup: ${email}`);
    console.log(`📊 Total signups: ${waitlistEmails.length}`);

    return res.status(200).json({ 
      success: true, 
      message: 'Thanks for joining! We\'ll notify you when we launch.' 
    });
  } catch (error) {
    console.error('Error processing waitlist:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Something went wrong. Please try again.' 
    });
  }
}

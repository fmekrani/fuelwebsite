import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';

const app = express();
const PORT = process.env.PORT || 3000;
const WAITLIST_FILE = path.join(__dirname, '..', 'waitlist.json');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

// Ensure waitlist file exists
if (!fs.existsSync(WAITLIST_FILE)) {
  fs.writeFileSync(WAITLIST_FILE, JSON.stringify({ emails: [] }, null, 2));
}

// Routes
app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Waitlist endpoint
app.post('/waitlist', (req: Request, res: Response) => {
  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ 
      success: false, 
      message: 'Please provide a valid email address.' 
    });
  }

  try {
    // Read existing waitlist
    const data = fs.readFileSync(WAITLIST_FILE, 'utf-8');
    const waitlist = JSON.parse(data);

    // Check if email already exists
    if (waitlist.emails.includes(email)) {
      return res.status(200).json({ 
        success: true, 
        message: 'You\'re already on the waitlist!' 
      });
    }

    // Add new email
    waitlist.emails.push(email);
    fs.writeFileSync(WAITLIST_FILE, JSON.stringify(waitlist, null, 2));

    res.status(200).json({ 
      success: true, 
      message: 'Thanks for joining! We\'ll notify you when we launch.' 
    });
  } catch (error) {
    console.error('Error processing waitlist:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Something went wrong. Please try again.' 
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`📧 Waitlist data: ${WAITLIST_FILE}`);
});

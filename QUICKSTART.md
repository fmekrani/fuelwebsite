# Quick Start Guide

Welcome to your Fuel Fitness App landing page! 🔥

## You're Ready to Go! ✅

Your landing page is now live at **http://localhost:3000**

## What You Have

✨ **A premium, Apple-style landing page** with:
- Smooth animations and scroll effects
- Fully responsive mobile design
- Interactive screenshot gallery with lightbox
- Working waitlist signup form
- Professional "About Me" section with your resume info
- All 9 sections as requested

## Next Steps

### 1. Add Your Real Screenshots

Replace the placeholder images in `public/images/` with your actual app screenshots:
- Export from iOS Simulator (Cmd + S)
- Keep the same filenames
- Recommended size: 750px width

**Required images:**
- `home-screen.jpg`
- `feed-screen.jpg`
- `leaderboards-screen.jpg`
- `calories-screen.jpg`
- `analytics-screen.jpg`
- `run-tracking-screen.jpg`
- `workout-plans-screen.jpg`

### 2. Update Your Links

Open `public/index.html` and search/replace these placeholders:
- `#portfolio-link` → Your actual portfolio URL
- `#linkedin-link` → Your LinkedIn profile URL
- `#github-link` → Your GitHub profile URL
- `your.email@example.com` → Your real email address

### 3. Customize (Optional)

**Change the accent color:**
Edit `public/styles.css` and modify:
```css
--color-primary: #FF3B30;  /* Your color here */
```

**Change app name:**
Search for "Fuel" in `public/index.html` and replace with your app name.

## Running the Site

```bash
# Development (auto-reload with nodemon)
npm run dev:watch

# Production
npm run build
npm start
```

## View Waitlist Signups

Check `waitlist.json` in the root folder to see who joined your waitlist!

## Test the Features

1. **Navigation**: Click menu items to smooth scroll
2. **Screenshots**: Click any screenshot to open lightbox
3. **Waitlist**: Try submitting your email
4. **Mobile**: Resize browser to see responsive design
5. **Animations**: Scroll down to see fade-in effects

## Deploy When Ready

This site works on any Node.js hosting:
- **Vercel**: `vercel --prod`
- **Heroku**: `git push heroku main`
- **Netlify**: Deploy via Git
- **DigitalOcean/AWS**: Standard Node.js app

## Customize Further

All content is in `public/index.html` - sections are clearly labeled!

---

**Built with passion. Ready to impress recruiters and investors! 🚀**

Questions? Check the full README.md or reach out!

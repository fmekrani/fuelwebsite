# Fuel - Fitness App Landing Page

A premium, Apple-style landing page for the Fuel fitness app. Built with TypeScript, Node.js, Express, and vanilla CSS.

![Launching 2026](https://img.shields.io/badge/Launching-2026-FF3B30?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

## ✨ Features

- **Premium Design**: Apple-inspired aesthetic with smooth animations and glassy effects
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Fast & Lightweight**: No heavy frameworks - just vanilla CSS and JavaScript
- **SEO Optimized**: Meta tags, Open Graph, and semantic HTML
- **Waitlist System**: Backend API to collect early access sign-ups
- **Interactive Gallery**: Lightbox modal for screenshot previews
- **Smooth Animations**: Scroll-triggered fade-ins and hover effects

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project directory**:
   ```bash
   cd fitness-landing
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Build the TypeScript files**:
   ```bash
   npm run build
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

   Or for auto-reload during development:
   ```bash
   npm run dev:watch
   ```

5. **Open your browser**:
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
fitness-landing/
├── server/
│   └── index.ts          # Express server with static file serving & waitlist API
├── public/
│   ├── index.html        # Main landing page
│   ├── styles.css        # Premium CSS styling
│   ├── app.js           # Frontend JavaScript (animations, form handling)
│   └── images/          # Screenshots and assets
│       ├── favicon.svg
│       ├── home-screen.jpg
│       ├── feed-screen.jpg
│       ├── leaderboards-screen.jpg
│       ├── calories-screen.jpg
│       ├── analytics-screen.jpg
│       ├── run-tracking-screen.jpg
│       └── workout-plans-screen.jpg
├── dist/                 # Compiled TypeScript output
├── waitlist.json        # Waitlist email storage
├── package.json
├── tsconfig.json
└── README.md
```

## 🎨 Design Philosophy

This landing page follows Apple's design principles:

- **Whitespace**: Generous spacing creates breathing room
- **Typography**: Large, bold headlines with clear hierarchy
- **Motion**: Subtle, purposeful animations that enhance UX
- **Color**: Minimal palette with a refined red accent (#FF3B30)
- **Simplicity**: Clean, uncluttered interface

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run build` | Compile TypeScript to JavaScript |
| `npm start` | Start the production server |
| `npm run dev` | Build and run the server |
| `npm run dev:watch` | Auto-reload on file changes (requires nodemon) |

## 🌐 API Endpoints

### POST /waitlist

Submit an email to join the waitlist.

**Request Body**:
```json
{
  "email": "user@example.com"
}
```

**Success Response**:
```json
{
  "success": true,
  "message": "Thanks for joining! We'll notify you when we launch."
}
```

**Error Response**:
```json
{
  "success": false,
  "message": "Please provide a valid email address."
}
```

## 📸 Adding Screenshots

To add your app screenshots:

1. Export screenshots from your iOS simulator or device
2. Optimize images for web (recommended: 750px width for mobile screenshots)
3. Save to `public/images/` with these names:
   - `home-screen.jpg` - Main dashboard
   - `feed-screen.jpg` - Social feed
   - `leaderboards-screen.jpg` - Competition view
   - `calories-screen.jpg` - Nutrition tracking
   - `analytics-screen.jpg` - Insights dashboard
   - `run-tracking-screen.jpg` - GPS tracking
   - `workout-plans-screen.jpg` - Exercise library

## 🎯 Customization Guide

### Update Your Information

Search for these placeholders and replace with your actual links:

- `#portfolio-link` - Your portfolio URL
- `#linkedin-link` - Your LinkedIn profile
- `#github-link` - Your GitHub profile
- `your.email@example.com` - Your email address
- `Fuel` - Change app name throughout if desired

### Colors

Edit CSS variables in `public/styles.css`:

```css
:root {
    --color-primary: #FF3B30;        /* Main accent color */
    --color-primary-dark: #E02F25;   /* Hover state */
    --color-primary-light: #FF6058;  /* Light variant */
}
```

### Content

All content can be edited directly in `public/index.html`. Sections are clearly labeled with HTML comments.

## 🚢 Deployment

### Deploy to any platform that supports Node.js:

**Heroku**:
```bash
git push heroku main
```

**Vercel**:
```bash
vercel --prod
```

**DigitalOcean / AWS / GCP**:
1. Build: `npm run build`
2. Start: `npm start`
3. Ensure port 3000 is accessible

### Environment Variables

Set `PORT` to specify a custom port:
```bash
export PORT=8080
npm start
```

## 📊 Performance

- Lighthouse Score: 95+ (Performance)
- No external dependencies for frontend
- Optimized assets and animations
- Mobile-first responsive design

## 🛠 Tech Stack

- **Backend**: Node.js + Express + TypeScript
- **Frontend**: Vanilla HTML/CSS/JavaScript
- **Styling**: Custom CSS with CSS variables
- **Build**: TypeScript compiler
- **Dev Tools**: Nodemon (optional)

## 📝 License

MIT License - feel free to use this for your own projects!

## 👨‍💻 Author

**Faheem Mekrani**
- Purdue University - Computer Engineering
- AI/ML Concentration • Dean's List • GPA 3.73

---

Built with passion. Launching 2026. 🔥

## 🎁 Bonus Features

- ✅ Smooth scroll animations
- ✅ Lightbox image gallery
- ✅ Mobile hamburger menu
- ✅ Form validation
- ✅ Success/error messaging
- ✅ Sticky navigation
- ✅ Parallax effects
- ✅ Accessibility optimized
- ✅ SEO ready

## 💡 Tips

1. **Add Google Analytics**: Insert tracking code in `public/index.html`
2. **Set up email notifications**: Integrate with SendGrid/Mailchimp for waitlist emails
3. **Add a custom domain**: Point DNS to your server for a professional URL
4. **Enable HTTPS**: Use Let's Encrypt or Cloudflare for SSL
5. **Monitor performance**: Use Vercel Analytics or Google PageSpeed Insights

## 🐛 Troubleshooting

**Port already in use**:
```bash
lsof -ti:3000 | xargs kill -9
# or use a different port
PORT=8080 npm start
```

**TypeScript errors**:
```bash
npm install --save-dev @types/node @types/express
npm run build
```

**Images not loading**:
- Check file names match exactly (case-sensitive)
- Ensure images are in `public/images/`
- Verify file permissions

---

**Questions?** Open an issue or reach out at your.email@example.com
# fuel-website

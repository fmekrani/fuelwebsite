# Customization Checklist

Use this checklist to personalize your landing page.

## 🎨 Essential Customizations

### Links & Contact Info
- [ ] Replace `#portfolio-link` with your portfolio URL (appears 3 times)
- [ ] Replace `#linkedin-link` with your LinkedIn profile URL (appears 4 times)
- [ ] Replace `#github-link` with your GitHub profile URL (appears 2 times)
- [ ] Replace `your.email@example.com` with your real email (appears 4 times)

**Quick find & replace in:** `public/index.html`

---

### Screenshots
- [ ] `home-screen.jpg` - Replace with your home screen
- [ ] `feed-screen.jpg` - Replace with your feed screen
- [ ] `leaderboards-screen.jpg` - Replace with leaderboards
- [ ] `calories-screen.jpg` - Replace with calories tracking
- [ ] `analytics-screen.jpg` - Replace with analytics dashboard
- [ ] `run-tracking-screen.jpg` - Replace with run tracking
- [ ] `workout-plans-screen.jpg` - Replace with workout plans
- [ ] `og-image.jpg` - Create a 1200x630px social share image

**Location:** `public/images/`

---

## 🔧 Optional Customizations

### Branding
- [ ] Change app name from "Fuel" to your app name
- [ ] Update color scheme (edit CSS variables in `public/styles.css`)
- [ ] Add your own favicon/logo

### SEO
- [ ] Update meta description in `<head>`
- [ ] Update Open Graph tags with your domain
- [ ] Add Google Analytics tracking code
- [ ] Submit sitemap to Google Search Console

### Features
- [ ] Add email notification service (SendGrid/Mailchimp)
- [ ] Connect to a database instead of JSON file
- [ ] Add Google reCAPTCHA to waitlist form
- [ ] Set up custom domain

---

## 📝 Content Tweaks

### Hero Section
- [ ] Adjust headline text if needed
- [ ] Modify supporting copy to match your brand voice

### Features Section
- [ ] Add/remove feature cards as needed
- [ ] Rewrite descriptions to match your app exactly

### About Section
✅ Already includes your Purdue info, GPA, skills, projects, experience
- [ ] Add a profile photo (replace profile icon)
- [ ] Update experience if you have new positions

---

## 🚀 Before Going Live

- [ ] Test on mobile devices (real phone, not just simulator)
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Check all links work
- [ ] Test waitlist form submission
- [ ] Verify images load quickly
- [ ] Test in multiple browsers (Safari, Chrome, Firefox)
- [ ] Proofread all copy for typos
- [ ] Set up HTTPS/SSL certificate
- [ ] Configure environment variables for production

---

## 🎯 Quick Search Terms

Use these to find placeholders quickly:

```bash
# In public/index.html
#portfolio-link
#linkedin-link
#github-link
your.email@example.com
Fuel (if changing app name)
```

---

**Tip:** Make changes one section at a time and refresh the browser to see updates immediately!

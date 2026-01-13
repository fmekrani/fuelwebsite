# Deploying to Vercel 🚀

Your site is ready to deploy to Vercel! Follow these simple steps.

## Quick Deploy (Easiest)

### Option 1: Deploy via Vercel CLI

1. **Install Vercel CLI** (if you haven't already):
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Follow the prompts**:
   - Link to existing project? No
   - Project name: `fuel-fitness` (or your choice)
   - Which directory: `./` (current directory)
   - Deploy? Yes

4. **Production deploy**:
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via GitHub (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Fuel landing page"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/fuel-landing.git
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects settings ✨
   - Click "Deploy"

3. **Done!** Your site will be live at `your-project.vercel.app`

---

## ⚙️ Configuration

The project includes `vercel.json` which configures:
- Static file serving from `public/`
- Serverless function for `/waitlist` endpoint
- Proper routing

### Environment Variables (Optional)

If you want to add analytics or services:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add your variables (e.g., `GOOGLE_ANALYTICS_ID`)

---

## 📧 Important: Waitlist Data Storage

**Note**: The current serverless setup uses in-memory storage that **resets on each deployment**.

### For Production, Choose One:

#### Option 1: Vercel KV (Redis) - Easiest
```bash
# Add Vercel KV to your project
vercel storage kv create waitlist-db
```

Then update `api/waitlist.ts` to use KV storage.

#### Option 2: Vercel Postgres
```bash
vercel storage postgres create waitlist-db
```

#### Option 3: Airtable (No setup needed)
- Create free Airtable base
- Add API key to Vercel env vars
- Update endpoint to send to Airtable

#### Option 4: Google Sheets
- Use Google Sheets API
- Simple and viewable in spreadsheet

**For now**: Check Vercel logs to see email submissions:
```bash
vercel logs
```

---

## 🔧 Custom Domain

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain (e.g., `fuel.app`)
3. Follow DNS configuration instructions
4. Vercel auto-provisions SSL certificate

---

## 📊 Monitoring

View your site performance:
- **Deployments**: See all deployments and rollback if needed
- **Logs**: Real-time logs of waitlist submissions
- **Analytics**: Built-in Vercel Analytics (enable in settings)

---

## 🚀 Deployment Workflow

After initial setup:

```bash
# Make changes to your site
git add .
git commit -m "Update features section"
git push

# Vercel automatically deploys! 🎉
```

Every push to `main` = automatic deployment to production
Every PR = preview deployment with unique URL

---

## ✅ Post-Deployment Checklist

- [ ] Test waitlist form on live site
- [ ] Check mobile responsiveness
- [ ] Update Open Graph image URL in HTML
- [ ] Test all navigation links
- [ ] Set up custom domain (optional)
- [ ] Enable Vercel Analytics
- [ ] Choose permanent waitlist storage solution

---

## 🆘 Troubleshooting

**Build fails?**
- Check Vercel build logs
- Ensure all dependencies are in `package.json`

**Waitlist not working?**
- Check Vercel function logs
- Verify `/waitlist` endpoint is accessible

**Images not loading?**
- Ensure images are in `public/images/`
- Check file paths are lowercase

---

## 💡 Pro Tips

1. **Preview Deployments**: Every PR gets a unique URL for testing
2. **Instant Rollbacks**: One-click rollback to previous deployments
3. **Edge Network**: Your site serves from 100+ edge locations globally
4. **Zero Config**: Vercel detects your setup automatically
5. **Free Tier**: Generous free tier for personal projects

---

**Your site will be live in under 2 minutes! 🔥**

Need help? Check [Vercel docs](https://vercel.com/docs) or their Discord.

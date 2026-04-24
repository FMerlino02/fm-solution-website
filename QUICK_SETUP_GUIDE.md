# Quick Setup Guide - Support Ticket System

## 🚀 Get Started in 5 Minutes

### Step 1: Get Discord Webhook URL

1. Open Discord
2. Go to **Server Settings** → **Integrations** → **Webhooks**
3. Click **New Webhook**
4. Copy the webhook URL

### Step 2: Configure Environment

Add to your `.env` file:
```env
DISCORD_WEBHOOK_URL=paste_your_webhook_url_here
```

### Step 3: Test Locally

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Run locally
netlify dev
```

Visit: `http://localhost:8888/support`

### Step 4: Deploy to Netlify

**In Netlify Dashboard:**
1. Go to **Site Settings** → **Environment Variables**
2. Add variable:
   - Key: `DISCORD_WEBHOOK_URL`
   - Value: Your Discord webhook URL
3. Click **Save**

**Deploy:**
```bash
npm run build
netlify deploy --prod
```

## ✅ That's It!

Your support ticket system is now live at:
```
https://your-site.netlify.app/support
```

## 📝 Test the System

1. Go to `/support` on your site
2. Fill out the form
3. Upload an image (optional)
4. Submit
5. Check your Discord channel for the ticket!

## 🆘 Troubleshooting

**Function returns error?**
- Verify `DISCORD_WEBHOOK_URL` is set in Netlify dashboard
- Check the webhook URL is correct

**Can't access the page?**
- Make sure you deployed the latest code
- Clear browser cache

## 📖 Full Documentation

See [SUPPORT_SYSTEM_README.md](./SUPPORT_SYSTEM_README.md) for complete documentation.

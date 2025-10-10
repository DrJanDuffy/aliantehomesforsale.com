# 🎯 Environment Variables - What You Need to Add

Based on your existing Vercel environment variables, here's what you need to ADD for Google SEO optimization.

---

## ✅ Already Configured

You already have these (no action needed):

- ✅ **NEXT_PUBLIC_REALSCOUT_AGENT_ID** - RealScout widget working
- ✅ **CLOUDFLARE_GLOBAL_API_TOKEN** - Cloudflare integration ready
- ✅ **FOLLOW_UP_BOSS_API_KEY** - CRM integration ready
- ✅ **FOLLOW_UP_BOSS_AGENT_ID** - CRM agent configured
- ✅ **FOLLOW_UP_BOSS_BASE_URL** - CRM endpoint configured
- ✅ **SMS_PHONE_NUMBER** - SMS integration ready
- ✅ **SMS_AUTO_REPLY_ENABLED** - SMS automation configured
- ✅ **VITE_GOOGLE_MAPS_API_KEY** - Google Maps ready (if needed)
- ✅ **OPENROUTER_API_KEY** / **openaikey** - AI features ready

---

## ➕ What You Need to ADD

### 1. Google Analytics 4 (REQUIRED for tracking)

**Variable Name**: `NEXT_PUBLIC_GA_MEASUREMENT_ID`

**How to Get It**:
1. Go to [Google Analytics](https://analytics.google.com)
2. Create a new GA4 property (or use existing)
3. Go to **Admin** → **Data Streams** → Select your stream
4. Copy the **Measurement ID** (format: `G-XXXXXXXXXX`)

**Add to Vercel**:
1. Vercel Dashboard → Your Project → Settings → Environment Variables
2. Click **Add New Variable**
3. **Key**: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
4. **Value**: `G-XXXXXXXXXX` (your actual ID)
5. **Environments**: Select all three (Production, Preview, Development)
6. Click **Save**

**Example**:
```
Key: NEXT_PUBLIC_GA_MEASUREMENT_ID
Value: G-1234567890
Environments: ✓ Production  ✓ Preview  ✓ Development
```

---

### 2. Google Search Console Verification (OPTIONAL)

**Variable Name**: `NEXT_PUBLIC_GOOGLE_VERIFICATION`

**How to Get It**:
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `www.aliantehomesforsale.com`
3. Choose **HTML tag** verification method
4. Copy the verification code from the meta tag

**Add to Vercel**:
```
Key: NEXT_PUBLIC_GOOGLE_VERIFICATION
Value: your-verification-code-here
Environments: ✓ Production only
```

**Alternative**: You can also verify via DNS in Cloudflare (see `CLOUDFLARE_SEO_SETUP.md`)

---

### 3. Environment Identifier (OPTIONAL but helpful)

**Variable Name**: `NEXT_PUBLIC_ENV`

**Add to Vercel**:

**For Production**:
```
Key: NEXT_PUBLIC_ENV
Value: production
Environments: ✓ Production
```

**For Preview**:
```
Key: NEXT_PUBLIC_ENV
Value: preview
Environments: ✓ Preview
```

**For Development**:
```
Key: NEXT_PUBLIC_ENV
Value: development
Environments: ✓ Development
```

---

## 🔧 Integration Enhancements

Since you have Follow Up Boss and SMS, here are optional enhancements:

### Track Contact Form Submissions to Follow Up Boss

You can enhance your Google Analytics tracking to also send leads to Follow Up Boss:

**No new env vars needed** - you already have:
- `FOLLOW_UP_BOSS_API_KEY` ✅
- `FOLLOW_UP_BOSS_AGENT_ID` ✅
- `FOLLOW_UP_BOSS_BASE_URL` ✅

**What to do**: See section below on integrating GA4 with Follow Up Boss.

---

## 📊 Summary: Add These Now

### Minimum Required (1 variable):

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Recommended (3 variables):

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-code
NEXT_PUBLIC_ENV=production  # (add separately for each environment)
```

---

## 🚀 After Adding Variables

1. **Redeploy Your Site**:
   - Vercel Dashboard → Deployments
   - Click **⋯** on latest deployment
   - Click **Redeploy**

2. **Verify Google Analytics**:
   - Visit your site: `https://www.aliantehomesforsale.com`
   - Open browser DevTools → Console
   - Look for Google Analytics initialization
   - Check Google Analytics → Real-time → See your visit

3. **Test Contact Form**:
   - Submit a test contact form
   - Check it tracks in Google Analytics
   - Check it creates a lead in Follow Up Boss

---

## 💡 Enhanced Analytics with Your Existing Setup

Since you have Follow Up Boss, here's how to create a powerful tracking system:

### 1. Track Google Analytics Events

Already implemented in `app/components/GoogleAnalytics.tsx`:
- Page views
- Property views
- Contact form submissions
- Phone clicks
- Email clicks
- Search queries

### 2. Send Leads to Follow Up Boss

Your contact form can send to both GA4 AND Follow Up Boss:

```typescript
// When form is submitted
const handleSubmit = async (data) => {
  // 1. Track in Google Analytics
  trackContactFormSubmit('contact-page')
  
  // 2. Send to Follow Up Boss
  await fetch('/api/follow-up-boss/create-lead', {
    method: 'POST',
    body: JSON.stringify(data)
  })
}
```

### 3. Enhanced Event Tracking

Track more events:
- Property inquiries → GA4 + Follow Up Boss
- Home valuation requests → GA4 + Follow Up Boss
- SMS conversations → GA4 events
- RealScout widget interactions → GA4 events

---

## 🔗 Integration Architecture

Your current setup:

```
User Action
    ↓
Next.js App (Vercel)
    ↓
    ├─→ Google Analytics 4 (tracking)
    ├─→ Follow Up Boss (CRM)
    ├─→ SMS System (communication)
    └─→ RealScout (property listings)
    ↓
Cloudflare (CDN + DNS)
```

After adding GA4, you'll have complete visibility:
- **GA4**: User behavior, traffic sources, conversions
- **Follow Up Boss**: Lead management, follow-up
- **SMS**: Direct communication
- **RealScout**: Property views

---

## 📝 Quick Action Steps

### Step 1: Get Your GA4 Measurement ID (5 minutes)

1. Go to: https://analytics.google.com
2. Create property: "Aliante Homes For Sale"
3. Add data stream: Web
4. Copy Measurement ID: `G-XXXXXXXXXX`

### Step 2: Add to Vercel (2 minutes)

1. Go to: https://vercel.com/dashboard
2. Your project → Settings → Environment Variables
3. Add New: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
4. Value: Your G-XXXXXXXXXX
5. Environments: All three
6. Save

### Step 3: Redeploy (1 minute)

1. Deployments tab
2. Click **⋯** → Redeploy
3. Wait for deployment

### Step 4: Verify (2 minutes)

1. Visit your site
2. Google Analytics → Real-time
3. See your visit tracked!

---

## 🆘 Need Help?

### Can't Find Measurement ID?

**Google Analytics** → Admin → Data Streams → Your Stream → Top right shows Measurement ID

### Variable Not Working?

1. Check spelling: `NEXT_PUBLIC_GA_MEASUREMENT_ID` (exact)
2. Must start with `G-`
3. Selected all environments
4. Redeployed after adding

### Still Issues?

Check browser console for errors:
```javascript
console.log('GA ID:', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID)
```

---

## 🎉 That's It!

**Just add the GA4 Measurement ID** and you're done! Everything else is already configured.

Your site will have:
- ✅ Google Analytics tracking
- ✅ Google Search Console ready
- ✅ RealScout integration
- ✅ Follow Up Boss CRM
- ✅ SMS capabilities
- ✅ Cloudflare optimization
- ✅ Full SEO optimization

**Ready to launch!** 🚀


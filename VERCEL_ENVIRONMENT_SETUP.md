# Vercel Environment Variables Setup Guide

Complete guide to configuring environment variables for your Next.js site on Vercel.

---

## 📋 Table of Contents

1. [Environment Types](#environment-types)
2. [Required Variables](#required-variables)
3. [Setting Up in Vercel](#setting-up-in-vercel)
4. [Local Development](#local-development)
5. [Environment-Specific Configuration](#environment-specific-configuration)
6. [Best Practices](#best-practices)
7. [Troubleshooting](#troubleshooting)

---

## 🌍 Environment Types

Vercel provides three environments:

### 1. **Production**
- Main site: `https://www.aliantehomesforsale.com`
- Used for: Live traffic, real users
- Variables: Production-ready values

### 2. **Preview**
- Branch deployments: `your-site-git-branch.vercel.app`
- Used for: Testing before merge, staging
- Variables: Test/staging values

### 3. **Development**
- Local machine: `http://localhost:3000`
- Used for: Local coding and testing
- Variables: Local/test values

---

## ✅ Required Variables

### Minimum Required for Production

```bash
# Google Analytics (REQUIRED for tracking)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# RealScout Agent ID (REQUIRED for widget)
NEXT_PUBLIC_REALSCOUT_AGENT_ID=your-agent-encoded-id
```

### Optional but Recommended

```bash
# Google Search Console verification
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-verification-code

# Site URL (auto-set by Vercel, but can override)
NEXT_PUBLIC_SITE_URL=https://www.aliantehomesforsale.com

# Environment identifier
NEXT_PUBLIC_ENV=production

# Cloudflare (if using Workers/API)
CLOUDFLARE_ZONE_ID=your-zone-id
CLOUDFLARE_API_TOKEN=your-api-token
```

---

## 🔧 Setting Up in Vercel

### Step 1: Access Environment Variables

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project: `aliantehomesforsale.com-2`
3. Click **Settings** → **Environment Variables**

### Step 2: Add Required Variables

For each variable, you'll specify which environments it applies to:
- ☑️ Production
- ☑️ Preview
- ☑️ Development

#### Add Google Analytics ID

1. Click **Add New**
2. **Key**: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
3. **Value**: `G-XXXXXXXXXX` (your actual ID)
4. **Environments**: Select **Production**, **Preview**, **Development**
5. Click **Save**

#### Add RealScout Agent ID

1. Click **Add New**
2. **Key**: `NEXT_PUBLIC_REALSCOUT_AGENT_ID`
3. **Value**: Your agent encoded ID
4. **Environments**: Select all three
5. Click **Save**

#### Add Google Verification (Optional)

1. Click **Add New**
2. **Key**: `NEXT_PUBLIC_GOOGLE_VERIFICATION`
3. **Value**: Your verification code
4. **Environments**: Production only
5. Click **Save**

### Step 3: Redeploy

After adding/changing environment variables:

1. Go to **Deployments** tab
2. Click **⋯** (three dots) on latest deployment
3. Click **Redeploy**
4. Check **Use existing Build Cache**
5. Click **Redeploy**

---

## 💻 Local Development

### Step 1: Create .env.local

```bash
# In your project root
cp .env.local.example .env.local
```

### Step 2: Add Your Values

Edit `.env.local`:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_REALSCOUT_AGENT_ID=your-agent-id
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_ENV=development
NEXT_PUBLIC_DEBUG_MODE=true
```

### Step 3: Verify Variables

```bash
# Start dev server
npm run dev

# Check console for any missing env var warnings
# Open browser DevTools and check for errors
```

### Important Notes

- `.env.local` is **gitignored** - never commit it!
- Use `.env.local.example` as a template
- Share `.env.local.example` with your team
- Keep `.env.local` with actual secrets private

---

## 🎯 Environment-Specific Configuration

### Production Configuration

```bash
# .env.production (or Vercel Dashboard > Production)

# Real Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-REAL123456

# Production RealScout agent
NEXT_PUBLIC_REALSCOUT_AGENT_ID=prod-agent-id

# Production URL
NEXT_PUBLIC_SITE_URL=https://www.aliantehomesforsale.com

# Disable debug mode
NEXT_PUBLIC_DEBUG_MODE=false
NEXT_PUBLIC_ANALYTICS_DISABLED=false
```

### Preview/Staging Configuration

```bash
# Vercel Dashboard > Preview

# Separate GA4 property for staging (recommended)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-STAGING789

# Test RealScout agent (if available)
NEXT_PUBLIC_REALSCOUT_AGENT_ID=test-agent-id

# Enable debug mode
NEXT_PUBLIC_DEBUG_MODE=true
```

### Development Configuration

```bash
# .env.local

# Development GA4 (or disable entirely)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-DEV000000

# Test agent
NEXT_PUBLIC_REALSCOUT_AGENT_ID=dev-agent-id

# Local URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Enable all debugging
NEXT_PUBLIC_DEBUG_MODE=true
NEXT_PUBLIC_ANALYTICS_DISABLED=true
```

---

## 🔐 Security Best Practices

### Public vs. Private Variables

#### ✅ Public Variables (NEXT_PUBLIC_*)
These are exposed to the browser:

```bash
# Safe to expose
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXX
NEXT_PUBLIC_REALSCOUT_AGENT_ID=agent-id
NEXT_PUBLIC_SITE_URL=https://...
NEXT_PUBLIC_ENV=production
```

**Use for**: Frontend configuration, public APIs

#### 🔒 Private Variables (No NEXT_PUBLIC_ prefix)
These stay on the server:

```bash
# Keep secret
CLOUDFLARE_API_TOKEN=secret-token
MLS_API_SECRET=secret-key
DATABASE_URL=postgres://...
```

**Use for**: API keys, database credentials, secrets

### Security Checklist

- [ ] Never commit `.env.local` to git
- [ ] Use `NEXT_PUBLIC_` prefix ONLY for non-sensitive data
- [ ] Rotate secrets regularly
- [ ] Use different values for prod/preview/dev
- [ ] Store sensitive secrets in Vercel only
- [ ] Audit environment variables quarterly

---

## 🛠️ Advanced Configuration

### Using Multiple Environments

Create environment-specific files:

```bash
.env                    # Base (committed to git, no secrets)
.env.local             # Local overrides (gitignored)
.env.development       # Development defaults
.env.production        # Production defaults (rarely used)
```

### Dynamic Environment Detection

In your code:

```typescript
// lib/config.ts
export const config = {
  env: process.env.NEXT_PUBLIC_ENV || process.env.NODE_ENV,
  isProduction: process.env.NEXT_PUBLIC_ENV === 'production',
  isPreview: process.env.NEXT_PUBLIC_ENV === 'preview',
  isDevelopment: process.env.NEXT_PUBLIC_ENV === 'development',
  
  analytics: {
    enabled: process.env.NEXT_PUBLIC_ANALYTICS_DISABLED !== 'true',
    measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  },
  
  realscout: {
    agentId: process.env.NEXT_PUBLIC_REALSCOUT_AGENT_ID,
  },
  
  site: {
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aliantehomesforsale.com',
  },
}
```

### Environment-Based Features

```typescript
// app/components/GoogleAnalytics.tsx
export default function GoogleAnalytics({ measurementId }: Props) {
  const isDevelopment = process.env.NODE_ENV === 'development'
  const isDisabled = process.env.NEXT_PUBLIC_ANALYTICS_DISABLED === 'true'
  
  // Don't load in development or if disabled
  if (isDevelopment || isDisabled) {
    console.log('[GA] Disabled in current environment')
    return null
  }
  
  return (
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      strategy="afterInteractive"
    />
  )
}
```

---

## 📊 Environment Variables Reference

### Complete List

| Variable | Type | Required | Environments | Description |
|----------|------|----------|--------------|-------------|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Public | Yes | All | Google Analytics 4 Measurement ID |
| `NEXT_PUBLIC_REALSCOUT_AGENT_ID` | Public | Yes | All | RealScout agent encoded ID |
| `NEXT_PUBLIC_GOOGLE_VERIFICATION` | Public | No | Production | Google Search Console verification |
| `NEXT_PUBLIC_SITE_URL` | Public | No | All | Full site URL with protocol |
| `NEXT_PUBLIC_ENV` | Public | No | All | Environment name (production/preview/development) |
| `NEXT_PUBLIC_DEBUG_MODE` | Public | No | Dev/Preview | Enable debug logging |
| `NEXT_PUBLIC_ANALYTICS_DISABLED` | Public | No | Dev | Disable analytics |
| `CLOUDFLARE_ZONE_ID` | Private | No | Production | Cloudflare zone ID for API calls |
| `CLOUDFLARE_API_TOKEN` | Private | No | Production | Cloudflare API token |
| `VERCEL_URL` | Public | Auto | All | Automatically set by Vercel |
| `VERCEL_ENV` | Public | Auto | All | Automatically set by Vercel |

### Auto-Set by Vercel

These are automatically available:

```bash
VERCEL_URL                    # Deployment URL (changes per preview)
VERCEL_ENV                    # production | preview | development
VERCEL_GIT_COMMIT_SHA         # Git commit hash
VERCEL_GIT_COMMIT_REF         # Branch name
VERCEL_GIT_COMMIT_MESSAGE     # Commit message
```

---

## 🐛 Troubleshooting

### Issue: Environment Variable Not Working

**Symptoms**: Variable is undefined or using old value

**Solutions**:
1. Check variable name has `NEXT_PUBLIC_` prefix (if used in browser)
2. Redeploy after adding/changing variables
3. Clear browser cache and hard reload
4. Check spelling and case sensitivity

### Issue: Different Values in Preview vs Production

**Cause**: Variables set to different environments

**Solution**:
1. Go to Vercel Settings → Environment Variables
2. Check which environments each variable is assigned to
3. Edit variable to add/remove environments
4. Redeploy

### Issue: Analytics Not Loading

**Check**:
```bash
# In browser console
console.log('GA ID:', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID)
```

**Solutions**:
1. Verify `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set in Vercel
2. Check it starts with `G-`
3. Ensure not disabled: `NEXT_PUBLIC_ANALYTICS_DISABLED=false`
4. Redeploy and clear cache

### Issue: RealScout Widget Not Loading

**Check**:
```bash
console.log('Agent ID:', process.env.NEXT_PUBLIC_REALSCOUT_AGENT_ID)
```

**Solutions**:
1. Verify `NEXT_PUBLIC_REALSCOUT_AGENT_ID` is set
2. Check agent ID is valid
3. Ensure CSP allows `em.realscout.com`
4. Check browser console for specific errors

### Issue: Cannot Read Environment Variable

**Error**: `process.env.MY_VAR is undefined`

**Cause**: Missing `NEXT_PUBLIC_` prefix

**Solution**:
- Client-side: Use `NEXT_PUBLIC_MY_VAR`
- Server-side: Use `MY_VAR` (no prefix)

---

## ✅ Verification Checklist

After setting up environment variables:

### Local Development
- [ ] `.env.local` file created
- [ ] All required variables added
- [ ] `npm run dev` starts without errors
- [ ] Console shows no missing env var warnings

### Vercel Preview
- [ ] All variables added to Preview environment
- [ ] Preview deployment successful
- [ ] Test site works: `[branch]-[project].vercel.app`
- [ ] Google Analytics tracking (if enabled)
- [ ] RealScout widget loads

### Vercel Production
- [ ] All variables added to Production environment
- [ ] Production deployment successful
- [ ] Site loads: `https://www.aliantehomesforsale.com`
- [ ] Google Analytics tracking
- [ ] RealScout widget loads
- [ ] No console errors

---

## 📚 Quick Commands

### View Environment Variables Locally

```bash
# In your project
node -e "console.log(process.env)" | grep NEXT_PUBLIC
```

### Test Build with Environment Variables

```bash
# Build with production environment
npm run build

# Check for any errors related to env vars
```

### Verify in Browser

```javascript
// In browser console
console.table({
  'GA ID': process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  'Agent ID': process.env.NEXT_PUBLIC_REALSCOUT_AGENT_ID,
  'Site URL': process.env.NEXT_PUBLIC_SITE_URL,
  'Environment': process.env.NEXT_PUBLIC_ENV,
})
```

---

## 🎯 Next Steps

1. **Copy example files**: Use `.env.local.example` templates
2. **Add to Vercel**: Set all required variables in dashboard
3. **Local testing**: Create `.env.local` and test locally
4. **Deploy**: Push to GitHub and verify preview deployment
5. **Verify production**: Check all features work in production

---

## 📖 Related Documentation

- [Vercel Environment Variables Docs](https://vercel.com/docs/concepts/projects/environment-variables)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)
- `CLOUDFLARE_SEO_SETUP.md` - Cloudflare configuration
- `GOOGLE_SETUP_QUICK_START.md` - Google services setup

---

## 🎉 You're All Set!

Your environment variables are now properly configured for:
- ✅ Development on your local machine
- ✅ Preview deployments for testing
- ✅ Production deployment for live traffic

**Next**: Configure Cloudflare (see `CLOUDFLARE_SEO_SETUP.md`)


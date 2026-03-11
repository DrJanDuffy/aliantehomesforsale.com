# Deployment (Vercel)

**Project:** aliantehomesforsale.com  
**Project ID (API):** `prj_0RZw34lbC34PRwztLG5bqduiRxwY`

## Still not deploying?

Do this first so every push to `main` deploys regardless of CI:

1. Open **[Vercel Dashboard](https://vercel.com)** → **janet-duffys-projects** (or your team) → project **aliantehomesforsale.com**.
2. Go to **Settings** → **Git**.
3. If **Connected Git Repository** is empty: click **Connect Git Repository** → **GitHub** → authorize if needed → select **DrJanDuffy/aliantehomesforsale.com**.
4. Set **Production Branch** to `main` and save.

After this, each push to `main` will appear under **Deployments** and trigger a new production build. No GitHub Actions required.

If the repo is already connected, check **Deployments**: the latest run should show the commit you pushed. If there is no new deployment for your push, disconnect and reconnect the repo once.

---

## Make push to `main` trigger a Vercel deploy

**Option A – Vercel Git (recommended)**  
1. [Vercel Dashboard](https://vercel.com) → your **aliantehomesforsale** project.  
2. **Settings** → **Git**.  
3. Under **Connected Git Repository**:  
   - If none: **Connect Git Repository** → choose **GitHub** → **DrJanDuffy/aliantehomesforsale.com**.  
   - If already connected: confirm **Production Branch** is **main**.  
4. Save. Every push to `main` will trigger a new production deployment.

**Option B – GitHub Actions**  
The repo’s CI/CD workflow deploys to Vercel when:

- Event is a **push** to **main**, and  
- Jobs **quality**, **build**, and **security** succeed.

Required repo secrets (Settings → Secrets and variables → Actions):

| Secret | Description | Value (example) |
|--------|-------------|-----------------|
| `VERCEL_TOKEN` | Vercel API token | From [Vercel Account → Tokens](https://vercel.com/account/tokens) |
| `VERCEL_ORG_ID` | Team/org ID | From Vercel project **Settings → General** (URL or API) |
| `VERCEL_PROJECT_ID` | Project ID for API | `prj_0RZw34lbC34PRwztLG5bqduiRxwY` (aliantehomesforsale.com) |

If any of these are missing or a required job fails, the deploy step will not run.

## Deploy now (without pushing)

From the project root:

```bash
npx vercel --prod
```

(Use `vercel link` first if the project isn’t linked.)

## Production URL

- **Live site:** https://www.aliantehomesforsale.com

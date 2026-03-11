# Deployment Audit: Why Git Push Does Not Deploy to Vercel

**Date:** March 2026  
**Repo:** DrJanDuffy/aliantehomesforsale.com  
**Issue:** Pushing to `main` does not result in a Vercel production deployment.

---

## Summary

Deployment is intended to happen via **GitHub Actions** (CI/CD workflow). The **Deploy Production** job runs only when all of its dependent jobs succeed. The audit found **multiple blockers** that prevent the deploy step from running.

---

## 1. Root Cause: Workflow Run Fails Before Deploy

**Evidence:** [CI/CD Pipeline run #230](https://github.com/DrJanDuffy/aliantehomesforsale.com/actions/runs/22937383346) (commit `0ee2585`, push to `main`) — **Status: Failure**.

| Job               | Result   | Effect |
|-------------------|----------|--------|
| Code Quality      | **Failed** (exit code 1) | Blocks Build and everything after |
| Build & Test      | Skipped (0s)             | `needs: quality` |
| Performance Testing | —                     | `needs: build` |
| Security Scan     | Ran 59s; annotations (see below) | |
| **Deploy Production** | **Skipped (0s)**   | `needs: [quality, build, performance, security]` |

So **Deploy Production never runs** because **Code Quality** fails first.

### Why Code Quality can fail

- `npm run type-check` — TypeScript errors
- `npm run lint` — Biome lint
- `npm run format:check` — Biome format
- `npm audit --audit-level moderate` — Any moderate+ vulnerability

Fixing these in the repo (and keeping deps updated) is required for the pipeline to reach the deploy step.

---

## 2. Second Blocker: Performance Job Cannot Succeed

Even when Code Quality and Build pass, **Performance Testing** will fail.

**Reason:** The workflow runs Lighthouse CI against:

```yaml
urls: |
  http://localhost:3000
```

but **no step ever starts a server** on port 3000. The job builds the app but does not run `npm run start` (or similar). Lighthouse gets connection refused → job fails → **Deploy Production** is skipped because it has `needs: [..., performance, ...]`.

**Conclusion:** With the current config, every push will fail at Performance (if it gets that far), so the deploy step will never run unless the workflow is changed.

---

## 3. Security Scan Annotations (Non-blocking but Noisy)

The Security job uploads Trivy SARIF and uses CodeQL. Run #230 showed:

- **CodeQL:** “Resource not accessible by integration” and “ensure the workflow has at least the 'security-events: read' permission”.
- **CodeQL v3** deprecation notice (v3 deprecated December 2026).

These can cause warnings or permission errors but are not the primary reason deploy was skipped; the primary reason is Quality failure and Performance design.

---

## 4. Vercel Git Integration (Alternative Path)

If the project is **not** connected to GitHub in the Vercel dashboard:

- Vercel never sees pushes.
- The only way to deploy is via the GitHub Action (or manual `vercel --prod`).

**Recommendation:** In Vercel → Project **Settings** → **Git**, connect **DrJanDuffy/aliantehomesforsale.com** and set Production Branch to **main**. Then every push to `main` triggers a Vercel build and deploy regardless of the Actions workflow.

---

## 5. Required GitHub Secrets (For Action-Based Deploy)

If using the workflow to deploy, these must be set in the repo (**Settings** → **Secrets and variables** → **Actions**):

| Secret            | Purpose        |
|-------------------|----------------|
| `VERCEL_TOKEN`    | Vercel API auth |
| `VERCEL_ORG_ID`   | Vercel team/org |
| `VERCEL_PROJECT_ID` | Vercel project |

If any are missing, the **Deploy to Vercel** step will fail when it runs.

---

## 6. Recommendations Implemented

1. **Unblock deploy when Quality and Build pass**  
   - **Change:** `deploy-production` now depends only on `[quality, build, security]`.  
   - **Effect:** Performance no longer blocks production deploy. Performance can be fixed or made optional later (e.g. run Lighthouse against a preview URL or add a server step).

2. **Keep Performance job but don’t block deploy**  
   - Performance Testing still runs for visibility but is not in `deploy-production.needs`.  
   - Optional follow-up: fix Performance (e.g. start server before Lighthouse or point to a deployed URL) and then add it back to `needs` if desired.

3. **NEXT_VERSION in workflow**  
   - Updated from `15.5.0` to `15.5.10` in the workflow `env` for accuracy (does not change install; lockfile governs versions).

---

## 7. What to Do Next

1. **Ensure code passes locally:**  
   `npm run type-check && npm run lint && npm run format:check && npm audit --audit-level moderate`

2. **Push to `main`**  
   - If Quality and Build pass, **Deploy Production** will run (assuming secrets are set).  
   - If Quality fails, fix the reported errors and push again.

3. **Optional:** Connect the repo in Vercel (**Settings** → **Git**) so pushes to `main` always trigger a Vercel deployment even if the Action has issues.

4. **Optional:** Add `security-events: read` (and any other required permissions) to the workflow if you want to clear CodeQL/security-events warnings.

---

## Files Touched in This Audit

- `.github/workflows/ci-cd.yml` — `deploy-production.needs` and `env.NEXT_VERSION`
- `docs/DEPLOYMENT_AUDIT.md` — this audit

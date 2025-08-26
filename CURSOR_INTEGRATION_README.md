# 🚀 Vercel-Cursor Integration System

Automatically fix Vercel deployment failures using Cursor AI. This system monitors deployment failures and automatically generates and applies fixes.

## 🏗️ **System Components**

### 1. **Webhook Handler** (`app/api/webhooks/vercel/route.ts`)
- Receives Vercel deployment webhooks
- Verifies webhook signatures for security
- Triggers Cursor AI fixes on deployment failures

### 2. **Cursor Integration Service** (`cursor-integration-service.js`)
- Analyzes deployment errors using Cursor AI
- Generates automated fixes
- Applies changes and commits them
- Triggers new deployments

### 3. **Local Development Server** (`local-webhook-server.js`)
- Handles webhooks during local development
- Provides manual trigger endpoints
- Useful for testing the integration

### 4. **GitHub Actions Workflow** (`.github/workflows/vercel-cursor-integration.yml`)
- Automatically runs fixes when deployments fail
- Integrates with Cursor CLI
- Commits and pushes fixes automatically

## 🚀 **Quick Start**

### **Install Dependencies**
```bash
npm install express nodemon
```

### **Set Environment Variables**
```bash
# In Vercel Dashboard or .env.local
WEBHOOK_SECRET=your-secure-webhook-secret
VERCEL_TOKEN=your-vercel-api-token
CURSOR_API_KEY=your-cursor-api-key
```

### **Start Local Webhook Server**
```bash
npm run webhook-dev
```

### **Test the Integration**
```bash
# Test webhook endpoint
curl -X POST http://localhost:3001/webhook \
  -H "Content-Type: application/json" \
  -d '{"type": "deployment.failed", "payload": {"projectId": "test"}}'
```

## ⚙️ **Configuration**

### **Vercel Webhook Setup**
1. Go to Vercel Dashboard → Project Settings → Webhooks
2. Add webhook URL: `https://yourdomain.com/api/webhooks/vercel`
3. Select events: `deployment.failed`
4. Copy the webhook secret to your environment variables

### **GitHub Secrets Setup**
1. Go to GitHub Repository → Settings → Secrets and variables → Actions
2. Add the following secrets:
   - `VERCEL_TOKEN`: Your Vercel API token
   - `CURSOR_API_KEY`: Your Cursor API key

### **Cursor Configuration** (`cursor-vercel-config.json`)
```json
{
  "projects": [
    {
      "vercelProjectId": "your-project-id",
      "localPath": "./",
      "autoFix": true,
      "fixAttempts": 3
    }
  ],
  "webhookUrl": "https://yourdomain.com/api/webhooks/vercel",
  "cursorSettings": {
    "aiModel": "claude-3",
    "fixTimeout": 300000,
    "autoCommit": true,
    "autoPush": true
  }
}
```

## 🔧 **Usage**

### **Automatic Mode (Production)**
1. Deploy your Next.js app to Vercel
2. Configure webhooks in Vercel dashboard
3. Set environment variables
4. The system automatically fixes deployment failures

### **Manual Mode (Development)**
1. Start local webhook server: `npm run webhook-dev`
2. Trigger fixes manually: `npm run cursor-fix`
3. Test with sample deployment data

### **GitHub Actions Mode**
1. Push code to trigger automatic deployment
2. If deployment fails, GitHub Actions automatically runs
3. Cursor AI analyzes and fixes the issue
4. Changes are committed and pushed automatically

## 📋 **API Endpoints**

### **Webhook Endpoint**
- **URL**: `/api/webhooks/vercel`
- **Method**: `POST`
- **Headers**: `x-vercel-signature` (required)
- **Body**: Vercel webhook payload

### **Manual Fix Endpoint**
- **URL**: `/fix-deployment` (local server)
- **Method**: `POST`
- **Body**: `{ projectId, deploymentId, error, logs }`

### **Health Check**
- **URL**: `/health` (local server)
- **Method**: `GET`

## 🛡️ **Security Features**

- **Webhook Signature Verification**: Ensures webhooks come from Vercel
- **Environment Variable Protection**: Sensitive data stored securely
- **CORS Configuration**: Proper cross-origin request handling
- **Error Handling**: Comprehensive error logging and handling

## 🔍 **Monitoring & Debugging**

### **Logs to Watch**
- Webhook reception logs
- Cursor AI analysis logs
- Fix application logs
- Git operation logs
- Deployment trigger logs

### **Common Issues**
1. **Webhook not received**: Check Vercel webhook configuration
2. **Signature verification failed**: Verify `WEBHOOK_SECRET` environment variable
3. **Cursor AI failed**: Check Cursor CLI installation and API key
4. **Git operations failed**: Ensure proper git configuration and permissions

## 🚀 **Deployment Checklist**

- [ ] Environment variables configured in Vercel
- [ ] Webhook endpoint configured in Vercel dashboard
- [ ] GitHub secrets configured (if using GitHub Actions)
- [ ] Cursor CLI installed and configured
- [ ] Webhook secret matches between Vercel and environment
- [ ] Test webhook endpoint with sample data
- [ ] Verify automatic fix workflow

## 📚 **Advanced Features**

### **Custom Fix Strategies**
- Modify `cursor-integration-service.js` for custom logic
- Add specific error handling for common issues
- Implement retry mechanisms for failed fixes

### **Integration Extensions**
- Add Slack/Discord notifications
- Implement fix approval workflows
- Add fix success/failure metrics
- Integrate with other AI services

## 🤝 **Support**

For issues or questions:
1. Check the logs for error details
2. Verify configuration settings
3. Test webhook endpoints manually
4. Review Vercel and GitHub documentation

---

**Built with ❤️ for seamless Vercel deployments**

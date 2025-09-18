# Deployment Checklist: Natalify Backend to Netlify Functions

## ✅ Preparation Status

Your backend is fully prepared for deployment to Netlify Functions. Here's what has been completed:

✅ Netlify Functions directory structure created
✅ API handler configured to work with your Express app
✅ Health check function implemented
✅ Netlify configuration file (netlify.toml) set up
✅ Dependencies properly configured in both main and functions package.json
✅ Environment variables template available
✅ Documentation created for deployment process
✅ Placeholder files for publish directory

## 🚀 Deployment Steps

### Step 1: Commit and Push to GitHub

```bash
git add .
git commit -m "Prepare backend for Netlify Functions deployment"
git push origin main
```

### Step 2: Connect to Netlify

1. Go to [Netlify Dashboard](https://app.netlify.com/)
2. Click "New site from Git"
3. Select your GitHub repository (sscode2/ExBuybnd)
4. Configure deploy settings:
   - Branch: main
   - Build command: (leave empty)
   - Publish directory: `dist`
   - Functions directory: `netlify/functions`

### Step 3: Set Environment Variables

In Netlify dashboard, go to:
Site settings → Build & deploy → Environment → Environment variables

Add these variables:

| Variable | Description | Example |
|----------|-------------|---------|
| MONGODB_URI | MongoDB connection string | mongodb+srv://user:pass@cluster.mongodb.net/db |
| JWT_SECRET | Secret for JWT tokens | your-super-secret-jwt-key |
| ADMIN_EMAIL | Admin email | admin@yourdomain.com |
| ADMIN_PASSWORD | Admin password | your-secure-password |
| FRONTEND_URL | Your frontend URL | https://your-frontend.netlify.app |

### Step 4: Deploy

Click "Deploy site" and wait for the deployment to complete.

## 🔍 Testing After Deployment

After deployment, test these endpoints:

1. Health check:
   `https://your-site-name.netlify.app/.netlify/functions/health`

2. API endpoints:
   - Products: `https://your-site-name.netlify.app/.netlify/functions/api/products`
   - Single product: `https://your-site-name.netlify.app/.netlify/functions/api/products/{id}`
   - Orders: `https://your-site-name.netlify.app/.netlify/functions/api/orders`
   - Admin login: `https://your-site-name.netlify.app/.netlify/functions/api/admin/login`

## ⚠️ Common Issues and Solutions

### If you see "Module not found" errors:
- Ensure `serverless-http` is listed in both package.json files
- Run `npm install` in both root and netlify/functions directories

### If environment variables are not working:
- Double-check variable names in Netlify dashboard
- Ensure no extra spaces in variable values

### If functions timeout:
- Optimize database queries
- Add database indexes
- Implement pagination for large datasets

## 🛠 Local Testing

To test locally before deploying:

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Run locally:
   ```bash
   cd natalify-backend
   netlify dev
   ```

## 📚 Documentation

Refer to these files for more information:
- [NETLIFY_DEPLOYMENT_COMPLETE_GUIDE.md](NETLIFY_DEPLOYMENT_COMPLETE_GUIDE.md) - Complete deployment guide
- [NETLIFY_DEPLOYMENT.md](NETLIFY_DEPLOYMENT.md) - Additional deployment information
- [DEPLOYMENT_STEPS.md](DEPLOYMENT_STEPS.md) - Step-by-step instructions

## 🆘 Support

If you encounter issues:
1. Check Netlify function logs in the dashboard
2. Verify all environment variables are set correctly
3. Ensure your MongoDB connection string is valid
4. Confirm all dependencies are listed in package.json files

Your backend is now ready for deployment to Netlify Functions!
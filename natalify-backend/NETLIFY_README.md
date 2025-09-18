# Natalify Backend - Ready for Netlify Functions Deployment

Your backend is now prepared for deployment to Netlify Functions! Here's what has been done and what you need to do next.

## What's Been Prepared

I've made the following changes to your project to make it compatible with Netlify Functions:

1. **Netlify Configuration**: Created `netlify.toml` with proper build settings
2. **Functions Directory**: Set up the required structure at `netlify/functions/`
3. **API Handler**: Created a serverless function that wraps your Express app
4. **Health Check**: Added a simple health check function for testing
5. **Dependencies**: Added `serverless-http` for Express compatibility
6. **Documentation**: Created detailed deployment guides

## Files Added/Modified

- `netlify.toml` - Netlify build configuration
- `netlify/functions/api/handler.js` - Main API handler
- `netlify/functions/health.js` - Health check function
- `netlify/functions/package.json` - Function dependencies
- `dist/index.html` - Placeholder publish directory
- Modified `server.js` - Exported the Express app
- Added deployment documentation

## Next Steps for Deployment

### 1. Install Netlify CLI (if you haven't already)
```bash
npm install -g netlify-cli
```

### 2. Login to Netlify
```bash
netlify login
```

### 3. Initialize and Deploy
```bash
# Navigate to your backend directory
cd natalify-backend

# Initialize your Netlify site
netlify init

# Set your environment variables
netlify env:set MONGODB_URI your_mongodb_connection_string
netlify env:set JWT_SECRET your_secret_key
netlify env:set ADMIN_EMAIL admin@example.com
netlify env:set ADMIN_PASSWORD your_admin_password

# Deploy to a draft URL first
netlify deploy

# Deploy to production
netlify deploy --prod
```

### 4. Configure Environment Variables in Netlify Dashboard

In the Netlify dashboard, go to your site settings and add these environment variables:
- `MONGODB_URI` - Your MongoDB connection string
- `JWT_SECRET` - Secret key for JWT tokens
- `ADMIN_EMAIL` - Admin email for login
- `ADMIN_PASSWORD` - Admin password for login

## Your API Endpoints

After deployment, your API will be available at:
- `/.netlify/functions/health` - Health check
- `/.netlify/functions/api/products` - Products endpoint
- `/.netlify/functions/api/orders` - Orders endpoint
- `/.netlify/functions/api/admin` - Admin endpoints

## Need Help?

Refer to the detailed guides:
- [NETLIFY_DEPLOYMENT.md](NETLIFY_DEPLOYMENT.md) - Comprehensive deployment guide
- [DEPLOYMENT_STEPS.md](DEPLOYMENT_STEPS.md) - Step-by-step instructions

## Support

If you encounter any issues during deployment, check:
1. All environment variables are correctly set
2. Your MongoDB connection string is valid
3. All required dependencies are installed
4. Function timeouts (10 seconds limit on free tier)
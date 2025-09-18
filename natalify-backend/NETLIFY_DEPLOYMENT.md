# Deploying Natalify Backend to Netlify Functions

This guide will help you deploy your Natalify backend to Netlify Functions.

## Prerequisites

1. A Netlify account (free at [netlify.com](https://netlify.com))
2. The Netlify CLI installed (`npm install -g netlify-cli`)
3. Your project ready for deployment

## Deployment Steps

### 1. Install Netlify CLI (if not already installed)
```bash
npm install -g netlify-cli
```

### 2. Login to Netlify
```bash
netlify login
```

### 3. Initialize your Netlify site
Navigate to your project root directory and run:
```bash
netlify init
```

Choose "Create & configure a new site" and follow the prompts.

### 4. Set up environment variables
Copy your `.env` file values to Netlify:
```bash
netlify env:set MONGODB_URI your_mongodb_connection_string
netlify env:set JWT_SECRET your_jwt_secret
netlify env:set ADMIN_EMAIL your_admin_email
netlify env:set ADMIN_PASSWORD your_admin_password
```

### 5. Deploy to Netlify
```bash
netlify deploy
```

Choose the following options when prompted:
- Publish directory: `dist` (or just press Enter for default)
- Functions directory: `netlify/functions`

For a draft URL, choose "yes". For production deployment, choose "no" for draft and "yes" for production when prompted.

### 6. Alternative: Deploy using Netlify Dashboard

1. Push your code to a GitHub repository
2. Go to [Netlify Dashboard](https://app.netlify.com/)
3. Click "New site from Git"
4. Select your repository
5. Set the build settings:
   - Build command: (leave empty for backend-only)
   - Publish directory: `dist`
   - Functions directory: `netlify/functions`
6. Add environment variables in the "Environment variables" section
7. Click "Deploy site"

## API Endpoints

After deployment, your API will be available at:
- Health check: `https://your-site.netlify.app/.netlify/functions/health`
- API routes: `https://your-site.netlify.app/.netlify/functions/api/{route}`

For example:
- Products: `https://your-site.netlify.app/.netlify/functions/api/products`
- Orders: `https://your-site.netlify.app/.netlify/functions/api/orders`
- Admin: `https://your-site.netlify.app/.netlify/functions/api/admin`

## Notes

- Netlify Functions have execution time limits (10 seconds for free tier)
- Database connections should be handled carefully (use connection pooling)
- File system access is limited in serverless environments
- Static files should be served through Netlify's CDN rather than the function

## Troubleshooting

1. If you get module not found errors, make sure all dependencies are in the functions package.json
2. Check the Netlify function logs for detailed error information
3. Ensure environment variables are correctly set in the Netlify dashboard
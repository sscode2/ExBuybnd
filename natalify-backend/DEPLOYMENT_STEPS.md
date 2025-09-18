# Natalify Backend - Netlify Functions Deployment Steps

## Folder Structure Prepared

I've prepared your backend folder with the following structure for Netlify Functions deployment:

```
natalify-backend/
├── netlify/
│   ├── functions/
│   │   ├── api/
│   │   │   └── handler.js          # Main API handler for all routes
│   │   ├── health.js               # Simple health check function
│   │   ├── package.json            # Dependencies for functions
│   │   └── .gitignore              # Ignore node_modules and .env
│   └── netlify.toml                # Netlify configuration
├── dist/                           # Publish directory
│   └── index.html                  # Placeholder page
├── NETLIFY_DEPLOYMENT.md           # Detailed deployment guide
├── DEPLOYMENT_STEPS.md             # This file
└── ... (existing files)
```

## What Was Done

1. **Created Netlify Functions Structure**: Set up the required directory structure for Netlify Functions
2. **Modified Server Code**: Updated your server.js to export the Express app for use in Netlify Functions
3. **Created Function Handlers**: 
   - `health.js`: Simple health check function
   - `api/handler.js`: Main handler that routes all API requests to your existing Express routes
4. **Added Dependencies**: Installed `serverless-http` package required for running Express in Netlify Functions
5. **Created Configuration Files**:
   - `netlify.toml`: Netlify build and dev configuration
   - `package.json` in functions directory: Dependencies for Netlify Functions
   - `dist/index.html`: Placeholder publish directory
6. **Documentation**: Created comprehensive deployment guides

## Deployment Steps

### Method 1: Using Netlify CLI (Recommended)

1. **Install Netlify CLI globally** (if not already installed):
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**:
   ```bash
   netlify login
   ```

3. **Initialize your site**:
   ```bash
   netlify init
   ```
   - Choose "Create & configure a new site"
   - Follow the prompts to set up your site

4. **Set environment variables**:
   You'll need to set your environment variables in Netlify:
   ```bash
   netlify env:set MONGODB_URI your_mongodb_connection_string
   netlify env:set JWT_SECRET your_jwt_secret_here
   netlify env:set ADMIN_EMAIL your_admin_email
   netlify env:set ADMIN_PASSWORD your_admin_password
   ```

5. **Deploy**:
   ```bash
   netlify deploy
   ```
   - When prompted:
     - Publish directory: `dist`
     - Functions directory: `netlify/functions`
   - Choose "yes" for draft URL first to test
   - After testing, deploy to production with `netlify deploy --prod`

### Method 2: Using Netlify Dashboard

1. **Push your code to GitHub** (recommended) or another Git provider
2. **Go to Netlify Dashboard**: https://app.netlify.com/
3. **Click "New site from Git"**
4. **Select your repository**
5. **Set build settings**:
   - Build command: (leave empty)
   - Publish directory: `dist`
   - Functions directory: `netlify/functions`
6. **Add environment variables** in the "Environment" section:
   - MONGODB_URI: your MongoDB connection string
   - JWT_SECRET: your secret key for JWT tokens
   - ADMIN_EMAIL: admin email for login
   - ADMIN_PASSWORD: admin password for login
7. **Click "Deploy site"**

## API Endpoints After Deployment

After deployment, your API will be accessible at:
- Health check: `https://your-site-name.netlify.app/.netlify/functions/health`
- All your existing API routes: `https://your-site-name.netlify.app/.netlify/functions/api/{your-route}`

For example:
- Products list: `https://your-site-name.netlify.app/.netlify/functions/api/products`
- Single product: `https://your-site-name.netlify.app/.netlify/functions/api/products/{id}`
- Orders: `https://your-site-name.netlify.app/.netlify/functions/api/orders`
- Admin functions: `https://your-site-name.netlify.app/.netlify/functions/api/admin/{route}`

## Important Notes

1. **Database Connection**: Make sure your MongoDB URI is correctly set in environment variables
2. **CORS**: Your CORS settings in server.js may need to be updated to allow your frontend domain
3. **File Uploads**: File system access is limited in serverless environments; consider using cloud storage services for uploads
4. **Execution Time**: Netlify Functions have a 10-second execution time limit (free tier)
5. **Environment Variables**: Never commit your `.env` file to version control

## Troubleshooting

1. **Module not found errors**: Ensure all required dependencies are in the functions package.json
2. **CORS issues**: Update the CORS configuration in server.js to include your frontend domain
3. **Function timeouts**: Optimize database queries and external API calls
4. **Environment variables not found**: Double-check they are set in the Netlify dashboard

## Testing Locally

To test your functions locally before deploying:
```bash
netlify dev
```

This will start a local development server that mimics the Netlify environment.
# Complete Guide: Deploying Natalify Backend to Netlify Functions

## Current Status

Your backend is almost ready for deployment to Netlify Functions. I've verified that all the necessary files and configurations are in place:

✅ Netlify Functions directory structure created
✅ API handler configured correctly
✅ Health check function implemented
✅ Netlify configuration file (netlify.toml) set up
✅ Dependencies properly configured
✅ Environment variables template available

## Deployment Steps

### 1. Push Your Code to GitHub

First, make sure your code is pushed to your GitHub repository:

```bash
git add .
git commit -m "Prepare for Netlify Functions deployment"
git push origin main
```

### 2. Connect to Netlify

1. Go to [Netlify Dashboard](https://app.netlify.com/)
2. Click "New site from Git"
3. Select your GitHub repository
4. In the deploy settings:
   - Branch to deploy: `main` (or your default branch)
   - Build command: Leave empty (not needed for backend-only deployment)
   - Publish directory: `dist`
   - Functions directory: `netlify/functions` (should be auto-detected)

### 3. Set Environment Variables

In the Netlify dashboard, go to your site settings and add these environment variables:

| Variable Name | Description | Example Value |
|---------------|-------------|---------------|
| MONGODB_URI | Your MongoDB connection string | mongodb+srv://user:pass@cluster.mongodb.net/db |
| JWT_SECRET | Secret key for JWT tokens | your-super-secret-jwt-key-here |
| ADMIN_EMAIL | Admin email for login | admin@yourdomain.com |
| ADMIN_PASSWORD | Admin password for login | your-secure-password |
| FRONTEND_URL | Your frontend URL | https://your-frontend.netlify.app |

### 4. Deploy Your Site

Click "Deploy site" and wait for the deployment to complete.

## Testing Your Deployment

After deployment, you can test your functions at these endpoints:

- Health check: `https://your-site-name.netlify.app/.netlify/functions/health`
- API routes: `https://your-site-name.netlify.app/.netlify/functions/api/{route}`

For example:
- Products: `https://your-site-name.netlify.app/.netlify/functions/api/products`
- Single product: `https://your-site-name.netlify.app/.netlify/functions/api/products/{id}`
- Orders: `https://your-site-name.netlify.app/.netlify/functions/api/orders`
- Admin login: `https://your-site-name.netlify.app/.netlify/functions/api/admin/login`

## Troubleshooting Common Issues

### 1. Module Not Found Errors

If you see errors about missing modules, make sure all dependencies are listed in both:
- Main package.json (for local development)
- netlify/functions/package.json (for Netlify Functions)

### 2. Environment Variables Not Found

Ensure all required environment variables are set in the Netlify dashboard under:
Site settings → Build & deploy → Environment → Environment variables

### 3. CORS Issues

If your frontend can't access the API, update the CORS configuration in server.js:

```javascript
app.use(cors({
  origin: [
    process.env.FRONTEND_URL || 'http://localhost:5173',
    'https://your-frontend.netlify.app'  // Add your frontend URL
  ],
  credentials: true
}));
```

### 4. Function Timeout Errors

Netlify Functions have a 10-second execution limit. If you're getting timeout errors:
- Optimize database queries
- Add indexes to frequently queried fields
- Consider pagination for large datasets

## Local Development with Netlify Dev

To test your functions locally before deploying:

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Run Netlify Dev:
   ```bash
   netlify dev
   ```

This will start a local server that mimics the Netlify production environment.

## Security Considerations

1. Never commit your `.env` file to version control
2. Use strong, unique passwords for admin accounts
3. Rotate your JWT_SECRET regularly
4. Use environment variables for all sensitive configuration
5. Consider rate limiting for public endpoints

## Performance Optimization

1. Use database connection pooling
2. Implement caching for frequently accessed data
3. Optimize database queries with proper indexing
4. Use pagination for large result sets
5. Minimize the size of JSON responses

## Monitoring and Debugging

1. Check Netlify function logs in the Netlify dashboard
2. Add logging to your functions for debugging
3. Monitor function execution time and memory usage
4. Set up error tracking with services like Sentry

## Next Steps

1. Test all API endpoints after deployment
2. Update your frontend to use the new API URLs
3. Set up custom domain if needed
4. Configure SSL certificates (automatically provided by Netlify)
5. Set up monitoring and alerting for critical endpoints

## Support

If you encounter any issues during deployment:
1. Check the Netlify function logs for detailed error messages
2. Verify all environment variables are correctly set
3. Ensure your MongoDB connection string is valid
4. Confirm all required dependencies are listed in package.json files

For additional help, refer to the [Netlify Functions documentation](https://docs.netlify.com/functions/overview/).
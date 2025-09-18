# Complete Deployment Guide: Connecting Frontend and Backend

This guide will help you deploy both your frontend and backend repositories to create a fully functional e-commerce website.

## Repository Overview

- **Frontend**: [ExBuy](https://github.com/sscode2/ExBuy) - React/Vite application
- **Backend**: [ExBuybnd](https://github.com/sscode2/ExBuybnd) - Node.js/Express API with Netlify Functions

## Deployment Strategy

We'll deploy:
1. Frontend to Netlify (as a static site)
2. Backend to Netlify Functions (as serverless functions)
3. Connect them through environment variables

## Step 1: Backend Deployment

### 1.1 Prepare Backend Repository

Your backend is already prepared for Netlify Functions deployment with:
- Netlify Functions directory structure
- API handler configuration
- Health check function
- Netlify configuration file

### 1.2 Deploy Backend to Netlify Functions

1. Push your backend code to GitHub:
   ```bash
   cd C:\Users\rifat\Desktop\ExBuybnd
   git add .
   git commit -m "Prepare backend for Netlify deployment"
   git push origin main
   ```

2. Go to [Netlify Dashboard](https://app.netlify.com/)
3. Click "New site from Git"
4. Select your backend repository (sscode2/ExBuybnd)
5. Configure deploy settings:
   - Branch: main
   - Build command: (leave empty)
   - Publish directory: `dist`
   - Functions directory: `netlify/functions`

6. Set Environment Variables in Netlify:
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: Your JWT secret key
   - `ADMIN_EMAIL`: Admin email
   - `ADMIN_PASSWORD`: Admin password
   - `FRONTEND_URL`: Your frontend URL (will be set after frontend deployment)

7. Click "Deploy site"

### 1.3 Note Your Backend URL

After deployment, Netlify will provide a URL like:
`https://your-backend-site.netlify.app`

Note this URL as you'll need it for the frontend configuration.

## Step 2: Frontend Deployment

### 2.1 Update Frontend Environment Variables

1. Open the frontend `.env` file:
   `C:\Users\rifat\Desktop\ExBuy\natalify-frontend\.env`

2. Update the API URL to point to your deployed backend:
   ```
   VITE_API_URL=https://your-backend-site.netlify.app/.netlify/functions/api
   VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here
   ```

### 2.2 Deploy Frontend to Netlify

1. Push your frontend code to GitHub:
   ```bash
   cd C:\Users\rifat\Desktop\ExBuy\natalify-frontend
   git add .
   git commit -m "Update API URL for production"
   git push origin main
   ```

2. Go to [Netlify Dashboard](https://app.netlify.com/)
3. Click "New site from Git"
4. Select your frontend repository (sscode2/ExBuy)
5. Configure deploy settings:
   - Branch: main
   - Build command: `npm run build`
   - Publish directory: `dist`

6. Click "Deploy site"

## Step 3: Connect Frontend and Backend

### 3.1 Update Backend CORS Settings

After deploying your frontend, update your backend CORS configuration to allow requests from your frontend:

1. In your backend repository, update the CORS configuration in `server.js`:
   ```javascript
   app.use(cors({
     origin: [
       process.env.FRONTEND_URL || 'http://localhost:5173',
       'https://your-frontend-site.netlify.app'  // Add your frontend URL
     ],
     credentials: true
   }));
   ```

2. Update the FRONTEND_URL environment variable in your backend Netlify settings:
   - Key: `FRONTEND_URL`
   - Value: `https://your-frontend-site.netlify.app`

3. Redeploy your backend by triggering a new build in Netlify.

### 3.2 Final Frontend Configuration

If you didn't know your frontend URL during the initial backend deployment, update it now:

1. In your backend Netlify dashboard, go to Site settings → Build & deploy → Environment
2. Update or add the `FRONTEND_URL` variable with your frontend Netlify URL
3. Trigger a new backend deployment

## Testing Your Deployment

### Backend Endpoints
- Health check: `https://your-backend-site.netlify.app/.netlify/functions/health`
- API routes: `https://your-backend-site.netlify.app/.netlify/functions/api/{route}`

### Frontend Access
- Your e-commerce site: `https://your-frontend-site.netlify.app`

## API Endpoints

Your frontend will communicate with these backend endpoints:
- Products: `/.netlify/functions/api/products`
- Orders: `/.netlify/functions/api/orders`
- Admin: `/.netlify/functions/api/admin`
- Contact: `/.netlify/functions/api/contact`

## Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure your backend CORS configuration includes your frontend URL
2. **API Connection Issues**: Verify the VITE_API_URL in your frontend .env file points to the correct backend functions URL
3. **Environment Variables**: Double-check all environment variables are correctly set in Netlify
4. **Stripe Integration**: Ensure you have a valid Stripe publishable key

### Debugging Steps

1. Check Netlify function logs for backend errors
2. Use browser developer tools to inspect network requests from frontend
3. Test backend endpoints directly in your browser or with Postman
4. Verify MongoDB connection string is valid

## Updating Your Deployments

To update either frontend or backend:

### Frontend Updates
1. Make changes to your code
2. Commit and push to GitHub
3. Netlify will automatically deploy the changes

### Backend Updates
1. Make changes to your code
2. Commit and push to GitHub
3. Netlify will automatically deploy the changes
4. If you changed environment variables, update them in the Netlify dashboard

## Security Considerations

1. Never commit sensitive information to version control
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

## Support

If you encounter any issues during deployment:
1. Check the Netlify function logs for detailed error messages
2. Verify all environment variables are correctly set
3. Ensure your MongoDB connection string is valid
4. Confirm all required dependencies are listed in package.json files

For additional help, refer to the [Netlify Functions documentation](https://docs.netlify.com/functions/overview/).
# Complete Deployment Checklist: Frontend + Backend

## Prerequisites
- [ ] GitHub accounts for both repositories
- [ ] Netlify accounts
- [ ] MongoDB Atlas account (or other MongoDB hosting)
- [ ] Stripe account (for payment processing)
- [ ] Netlify CLI installed (`npm install -g netlify-cli`)

## Backend Deployment Checklist

### Preparation
- [ ] Verify Netlify Functions structure is in place
- [ ] Confirm server.js exports the Express app
- [ ] Check that all dependencies are listed in package.json
- [ ] Verify environment variables template exists (.env.example)

### GitHub Setup
- [ ] Push backend code to GitHub repository (sscode2/ExBuybnd)
- [ ] Verify repository contains all necessary files

### Netlify Backend Setup
- [ ] Log in to Netlify dashboard
- [ ] Click "New site from Git"
- [ ] Select backend repository (sscode2/ExBuybnd)
- [ ] Configure build settings:
  - [ ] Branch: main
  - [ ] Build command: (leave empty)
  - [ ] Publish directory: `dist`
  - [ ] Functions directory: `netlify/functions`
- [ ] Set environment variables:
  - [ ] `MONGODB_URI`: Your MongoDB connection string
  - [ ] `JWT_SECRET`: Your JWT secret key
  - [ ] `ADMIN_EMAIL`: Admin email
  - [ ] `ADMIN_PASSWORD`: Admin password
  - [ ] `FRONTEND_URL`: (will update after frontend deployment)
- [ ] Click "Deploy site"
- [ ] Note the deployed backend URL

### Backend Testing
- [ ] Test health check endpoint: `https://your-backend.netlify.app/.netlify/functions/health`
- [ ] Test API endpoints: `https://your-backend.netlify.app/.netlify/functions/api/products`

## Frontend Deployment Checklist

### Environment Variables Update
- [ ] Update VITE_API_URL in `.env` file to point to deployed backend functions URL
- [ ] Verify Stripe publishable key is set

### GitHub Setup
- [ ] Push frontend code to GitHub repository (sscode2/ExBuy)
- [ ] Verify repository contains all necessary files

### Netlify Frontend Setup
- [ ] Log in to Netlify dashboard
- [ ] Click "New site from Git"
- [ ] Select frontend repository (sscode2/ExBuy)
- [ ] Configure build settings:
  - [ ] Branch: main
  - [ ] Build command: `npm run build`
  - [ ] Publish directory: `dist`
- [ ] Click "Deploy site"
- [ ] Note the deployed frontend URL

### Frontend Testing
- [ ] Access the deployed frontend: `https://your-frontend.netlify.app`
- [ ] Test API connections from frontend to backend

## Connection and Final Configuration

### Update Backend CORS
- [ ] Update CORS configuration in backend server.js to include frontend URL
- [ ] Update FRONTEND_URL environment variable in backend Netlify settings
- [ ] Trigger a new backend deployment

### Final Testing
- [ ] Test all frontend functionality that connects to backend
- [ ] Test admin panel functionality
- [ ] Test product browsing and ordering
- [ ] Test contact form submission
- [ ] Test payment processing (with test keys)

## Post-Deployment Tasks

### Security
- [ ] Rotate JWT_SECRET to a strong, unique value
- [ ] Change admin credentials to secure values
- [ ] Update MongoDB connection string with secure credentials
- [ ] Verify no sensitive information is in version control

### Monitoring
- [ ] Set up error tracking (e.g., Sentry)
- [ ] Configure performance monitoring
- [ ] Set up alerts for critical errors

### Optimization
- [ ] Implement caching strategies
- [ ] Optimize database queries
- [ ] Add database indexes for frequently queried fields
- [ ] Implement pagination for large datasets

## Troubleshooting Checklist

### If Backend Functions Fail
- [ ] Check Netlify function logs
- [ ] Verify all dependencies are in package.json
- [ ] Confirm environment variables are set correctly
- [ ] Test MongoDB connection string validity

### If Frontend Can't Connect to Backend
- [ ] Verify VITE_API_URL in frontend .env file
- [ ] Check CORS configuration in backend
- [ ] Confirm frontend URL is in backend environment variables
- [ ] Test API endpoints directly

### If Deployment Fails
- [ ] Check build logs in Netlify
- [ ] Verify all required files are in repository
- [ ] Confirm build commands are correct
- [ ] Check for missing dependencies

## Useful Commands

### Local Development
```bash
# Backend
cd natalify-backend
npm run dev

# Frontend
cd natalify-frontend
npm run dev
```

### Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy locally for testing
netlify dev
```

## Important URLs to Remember

- Netlify Dashboard: https://app.netlify.com/
- Backend Functions Base URL: `https://your-site.netlify.app/.netlify/functions/api`
- Frontend URL: `https://your-frontend.netlify.app`
- MongoDB Atlas: https://cloud.mongodb.com/
- Stripe Dashboard: https://dashboard.stripe.com/

## Support Resources

- Netlify Documentation: https://docs.netlify.com/
- Netlify Functions Documentation: https://docs.netlify.com/functions/overview/
- Express.js Documentation: https://expressjs.com/
- React Documentation: https://react.dev/
- Vite Documentation: https://vite.dev/
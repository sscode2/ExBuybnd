# Deployment Verification Checklist

## Backend Verification

### File Structure
- [x] `netlify/functions/api/handler.js` - Main API handler
- [x] `netlify/functions/health.js` - Health check function
- [x] `netlify/functions/test-connection.js` - Test function
- [x] `netlify/functions/package.json` - Function dependencies
- [x] `netlify.toml` - Netlify configuration
- [x] `server.js` - Main Express app (exports app)
- [x] `dist/index.html` - Publish directory placeholder

### Dependencies
- [x] `serverless-http` in main package.json
- [x] `serverless-http` in functions package.json
- [x] All required Express dependencies present

### Configuration
- [x] Netlify Functions directory correctly specified
- [x] Publish directory correctly specified
- [x] Environment variables template available
- [x] CORS configured for frontend connection

### Function Handlers
- [x] API handler properly imports Express app
- [x] Health check function returns proper response
- [x] Test connection function for verification

## Frontend Verification

### Repository Structure
- [x] React/Vite application structure
- [x] package.json with build scripts
- [x] .env file for environment variables
- [x] All source files in src directory

### Dependencies
- [x] React and ReactDOM installed
- [x] React Router for navigation
- [x] Axios for API calls
- [x] TailwindCSS for styling
- [x] Stripe libraries for payments

### Configuration
- [x] Vite configuration file
- [x] Environment variables file
- [x] Build script in package.json

## Connection Verification

### API Endpoints
- [x] Backend exposes all required API endpoints
- [x] Frontend can call backend endpoints
- [x] CORS configured to allow frontend requests

### Environment Variables
- [x] Backend environment variables documented
- [x] Frontend environment variables configured
- [x] API URL points to Netlify Functions

## Deployment Ready Status

### Backend
✅ Ready for Netlify Functions deployment
- Functions directory: `netlify/functions`
- Publish directory: `dist`
- Build command: (empty)
- Environment variables needed:
  - `MONGODB_URI`
  - `JWT_SECRET`
  - `ADMIN_EMAIL`
  - `ADMIN_PASSWORD`
  - `FRONTEND_URL`

### Frontend
✅ Ready for Netlify static site deployment
- Build command: `npm run build`
- Publish directory: `dist`
- Environment variables needed:
  - `VITE_API_URL`
  - `VITE_STRIPE_PUBLISHABLE_KEY`

## Testing Plan

### Before Deployment
1. Test backend locally with `npm run dev`
2. Test frontend locally with `npm run dev`
3. Verify API calls between frontend and backend

### After Deployment
1. Test health check function: `/.netlify/functions/health`
2. Test API endpoints: `/.netlify/functions/api/products`
3. Test frontend connection to backend API
4. Test admin functionality
5. Test order placement
6. Test contact form
7. Test payment processing

## Common Issues Checklist

### Backend Deployment Issues
- [ ] Missing dependencies in package.json
- [ ] Incorrect import paths in handler.js
- [ ] Environment variables not set in Netlify
- [ ] MongoDB connection string invalid
- [ ] CORS configuration not allowing frontend

### Frontend Deployment Issues
- [ ] Incorrect API URL in .env file
- [ ] Missing build dependencies
- [ ] Incorrect publish directory
- [ ] Stripe key not set

### Connection Issues
- [ ] Frontend URL not in backend CORS
- [ ] Backend URL not in frontend environment
- [ ] Path mismatches in API calls
- [ ] HTTPS/HTTP mixed content issues

## Success Criteria

✅ Backend deploys without errors
✅ Frontend builds and deploys without errors
✅ Frontend can call backend API endpoints
✅ All e-commerce functionality works
✅ Admin panel accessible and functional
✅ Payment processing works with test keys
✅ Contact form submits successfully

## Post-Deployment Verification

1. [ ] Both sites are accessible via HTTPS
2. [ ] API calls from frontend to backend succeed
3. [ ] All pages load without errors
4. [ ] Product browsing works
5. [ ] Shopping cart functionality works
6. [ ] Checkout process completes
7. [ ] Admin login works
8. [ ] Order management works
9. [ ] Contact form submits
10. [ ] Site is responsive on mobile devices

## Support Resources

If any issues occur during deployment:

1. Check Netlify build logs
2. Verify all environment variables are set
3. Confirm repository contains all necessary files
4. Test functions locally with `netlify dev`
5. Check browser console for frontend errors
6. Check Netlify function logs for backend errors

## Next Steps

1. Deploy backend to Netlify Functions
2. Note the deployed backend URL
3. Update frontend environment variables
4. Deploy frontend to Netlify
5. Update backend CORS configuration
6. Test complete integration
7. Update to production environment variables
8. Final testing of all functionality
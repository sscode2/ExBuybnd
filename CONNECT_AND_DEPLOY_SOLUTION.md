# Complete Solution: Connect and Deploy Frontend & Backend

## Overview

You have two separate repositories that need to work together:
1. **Frontend** ([ExBuy](https://github.com/sscode2/ExBuy)): React/Vite e-commerce application
2. **Backend** ([ExBuybnd](https://github.com/sscode2/ExBuybnd)): Node.js/Express API with Netlify Functions

This solution will connect both repositories and deploy them to create a fully functional e-commerce website.

## Current Status

✅ **Backend**: Fully prepared for Netlify Functions deployment
✅ **Frontend**: Standard React/Vite application ready for deployment
✅ **Connection**: Ready to be established through environment variables

## Solution Architecture

```
┌─────────────────────┐    API Calls    ┌──────────────────────┐
│   Frontend (React)  │ ──────────────→ │  Backend (Node/Express)│
│   Netlify Site      │                 │  Netlify Functions     │
│                     │ ←────────────── │                        │
└─────────────────────┘    Responses    └──────────────────────┘
```

## Deployment Steps

### 1. Backend Deployment (Netlify Functions)

Your backend is already prepared with:
- Netlify Functions directory structure (`netlify/functions/`)
- API handler (`netlify/functions/api/handler.js`)
- Health check function (`netlify/functions/health.js`)
- Configuration file (`netlify.toml`)

**Steps**:
1. Push backend to GitHub: `git push origin main`
2. Connect to Netlify:
   - Repository: sscode2/ExBuybnd
   - Build command: (empty)
   - Publish directory: `dist`
   - Functions directory: `netlify/functions`
3. Set environment variables:
   - `MONGODB_URI`: Your MongoDB connection
   - `JWT_SECRET`: Your JWT secret
   - `ADMIN_EMAIL`: Admin email
   - `ADMIN_PASSWORD`: Admin password
4. Deploy

### 2. Frontend Deployment (Netlify Static Site)

**Steps**:
1. Push frontend to GitHub: `git push origin main`
2. Connect to Netlify:
   - Repository: sscode2/ExBuy
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Deploy

### 3. Connect Frontend to Backend

**Steps**:
1. Update frontend `.env` file:
   ```env
   VITE_API_URL=https://your-backend-site.netlify.app/.netlify/functions/api
   VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_key
   ```
2. Update backend CORS to allow frontend origin:
   ```javascript
   app.use(cors({
     origin: [
       'http://localhost:5173',
       'https://your-frontend-site.netlify.app'
     ],
     credentials: true
   }));
   ```
3. Set `FRONTEND_URL` environment variable in backend:
   - Key: `FRONTEND_URL`
   - Value: `https://your-frontend-site.netlify.app`

## Final URLs

After deployment:
- **Frontend**: `https://your-frontend-site.netlify.app`
- **Backend API**: `https://your-backend-site.netlify.app/.netlify/functions/api`
- **Health Check**: `https://your-backend-site.netlify.app/.netlify/functions/health`

## API Endpoints

Your frontend will communicate with these backend endpoints:
- Products: `/.netlify/functions/api/products`
- Single Product: `/.netlify/functions/api/products/:id`
- Orders: `/.netlify/functions/api/orders`
- Admin Login: `/.netlify/functions/api/admin/login`
- Contact Form: `/.netlify/functions/api/contact`

## Environment Variables Required

### Backend (.env)
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your_secure_password
FRONTEND_URL=https://your-frontend-site.netlify.app
```

### Frontend (.env)
```env
VITE_API_URL=https://your-backend-site.netlify.app/.netlify/functions/api
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
```

## Testing Your Deployment

1. Visit your frontend URL
2. Test product browsing
3. Test admin login
4. Test order placement
5. Test contact form

## Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure backend CORS includes frontend URL
2. **API Connection Failures**: Verify VITE_API_URL in frontend .env
3. **Environment Variables**: Check all variables are set in Netlify
4. **MongoDB Connection**: Verify MONGODB_URI is correct

### Debugging Steps

1. Check Netlify function logs
2. Test backend endpoints directly
3. Use browser dev tools to inspect network requests
4. Verify environment variables in Netlify dashboard

## Files Created to Help You

1. [DEPLOYMENT_CONNECT_FRONTEND_BACKEND.md](DEPLOYMENT_CONNECT_FRONTEND_BACKEND.md) - Complete deployment guide
2. [COMPLETE_DEPLOYMENT_CHECKLIST.md](COMPLETE_DEPLOYMENT_CHECKLIST.md) - Step-by-step checklist
3. [DEPLOYMENT_SCRIPTS.md](DEPLOYMENT_SCRIPTS.md) - Helpful scripts and commands
4. [FRONTEND_ENV_UPDATE.md](FRONTEND_ENV_UPDATE.md) - Guide to update frontend environment variables

## Next Steps

1. Deploy your backend first to get the URL
2. Update frontend environment variables with backend URL
3. Deploy your frontend
4. Update backend CORS and environment variables
5. Test the complete system

Your e-commerce website will be fully functional with:
- User-facing storefront
- Admin panel
- Product management
- Order processing
- Payment integration
- Contact forms

All deployed on Netlify with no server management required!
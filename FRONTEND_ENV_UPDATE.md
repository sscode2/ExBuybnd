# Frontend Environment Variables Update Guide

## Current Frontend .env File Location
`C:\Users\rifat\Desktop\ExBuy\natalify-frontend\.env`

## Current Content
```
VITE_API_URL=http://localhost:5000/api
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here
```

## Required Update
After deploying your backend to Netlify Functions, you'll need to update the VITE_API_URL to point to your deployed backend functions:

```
VITE_API_URL=https://your-backend-site-name.netlify.app/.netlify/functions/api
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here
```

## Steps to Update

1. Open the file `C:\Users\rifat\Desktop\ExBuy\natalify-frontend\.env` in a text editor
2. Replace the VITE_API_URL value with your deployed backend URL
3. Save the file
4. Commit and push to GitHub to trigger a new deployment

## Example After Backend Deployment
If your backend is deployed to `https://exbuybnd-backend.netlify.app`, then your .env should be:

```
VITE_API_URL=https://exbuybnd-backend.netlify.app/.netlify/functions/api
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here
```

## Local Development
For local development, you can keep:
```
VITE_API_URL=http://localhost:5000/.netlify/functions/api
```

But make sure to update it before deploying to production.
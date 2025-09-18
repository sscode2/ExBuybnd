# Deployment Scripts and Commands

## Backend Deployment Script

Create this script as `deploy-backend.bat` in your backend directory:

```batch
@echo off
echo Deploying Natalify Backend to Netlify...

echo 1. Adding all changes to git...
git add .

echo 2. Committing changes...
git commit -m "Deploy backend to Netlify Functions"

echo 3. Pushing to GitHub...
git push origin main

echo 4. Deploying to Netlify...
netlify deploy --prod

echo Backend deployment completed!
pause
```

## Frontend Deployment Script

Create this script as `deploy-frontend.bat` in your frontend directory:

```batch
@echo off
echo Deploying Natalify Frontend to Netlify...

echo 1. Adding all changes to git...
git add .

echo 2. Committing changes...
git commit -m "Deploy frontend to Netlify"

echo 3. Pushing to GitHub...
git push origin main

echo 4. Deploying to Netlify...
netlify deploy --prod

echo Frontend deployment completed!
pause
```

## Environment Setup Script

Create this script as `setup-environment.bat`:

```batch
@echo off
echo Setting up development environment...

echo Installing Netlify CLI...
npm install -g netlify-cli

echo Installing backend dependencies...
cd natalify-backend
npm install

echo Installing frontend dependencies...
cd ../ExBuy/natalify-frontend
npm install

echo Environment setup completed!
pause
```

## Local Development Script

Create this script as `start-dev.bat`:

```batch
@echo off
echo Starting local development servers...

echo Starting backend server in new window...
start "Backend Server" cmd /k "cd natalify-backend && npm run dev"

echo Starting frontend server in new window...
start "Frontend Server" cmd /k "cd ExBuy/natalify-frontend && npm run dev"

echo Both servers started. Check your browser for:
echo Frontend: http://localhost:5173
echo Backend API: http://localhost:5000/api
```

## MongoDB Connection String Generator

If you're using MongoDB Atlas, your connection string will look like:
```
mongodb+srv://<username>:<password>@cluster0.abc123.mongodb.net/<database-name>?retryWrites=true&w=majority
```

Replace:
- `<username>` with your MongoDB username
- `<password>` with your MongoDB password
- `<database-name>` with your database name (e.g., natalify)

## JWT Secret Generator

To generate a secure JWT secret, you can use this Node.js command:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Or use this PowerShell command:
```powershell
-join ((65..90) + (97..122) | Get-Random -Count 32 | % {[char]$_})
```

## Environment Variables Template

### Backend Environment Variables (.env)
```env
# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database

# JWT
JWT_SECRET=your-super-secret-jwt-key-here-change-in-production

# Admin Credentials
ADMIN_EMAIL=admin@yourdomain.com
ADMIN_PASSWORD=your-secure-password

# Email Configuration (for contact form)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-password

# Frontend URL
FRONTEND_URL=https://your-frontend.netlify.app

# Server
PORT=5000
```

### Frontend Environment Variables (.env)
```env
VITE_API_URL=https://your-backend.netlify.app/.netlify/functions/api
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here
```

## Testing Commands

### Test Backend Locally
```bash
cd natalify-backend
npm run dev
```
Then visit: http://localhost:5000/.netlify/functions/api/products

### Test Frontend Locally
```bash
cd ExBuy/natalify-frontend
npm run dev
```
Then visit: http://localhost:5173

### Test Netlify Functions Locally
```bash
cd natalify-backend
netlify dev
```

## Deployment Commands

### Deploy Backend to Netlify
```bash
cd natalify-backend
netlify deploy --prod
```

### Deploy Frontend to Netlify
```bash
cd ExBuy/natalify-frontend
netlify deploy --prod
```

### Quick Git Commands

#### Backend
```bash
cd natalify-backend
git add .
git commit -m "Your commit message"
git push origin main
```

#### Frontend
```bash
cd ExBuy/natalify-frontend
git add .
git commit -m "Your commit message"
git push origin main
```
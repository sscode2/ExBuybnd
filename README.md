# ExBuybnd - Modern E-commerce Platform

A complete e-commerce backend solution built with Node.js, Express, and MongoDB.

## Features

- Product management (CRUD operations)
- Order processing and management
- User authentication and authorization
- Admin panel for managing products and orders
- Payment integration
- Contact form handling
- RESTful API design
- Rate limiting and security middleware

## Tech Stack

- **Backend**: Node.js with Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT
- **Security**: Helmet, CORS, Rate Limiting
- **Deployment**: Netlify Functions ready

## Project Structure

```
natalify-backend/
├── middleware/        # Authentication middleware
├── models/            # Database models
├── routes/            # API routes
├── utils/             # Utility functions
├── scripts/           # Helper scripts
├── netlify/           # Netlify Functions configuration
└── server.js          # Main server file
```

## Setup Instructions

1. Clone the repository
2. Navigate to the backend directory: `cd natalify-backend`
3. Install dependencies: `npm install`
4. Create a `.env` file based on `.env.example`
5. Start the development server: `npm run dev`

## Deployment

This backend is configured for deployment to Netlify Functions. For detailed deployment instructions, see [NETLIFY_DEPLOYMENT_COMPLETE_GUIDE.md](natalify-backend/NETLIFY_DEPLOYMENT_COMPLETE_GUIDE.md).

## API Endpoints

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get a specific product
- `POST /api/orders` - Create a new order
- `POST /api/admin/login` - Admin login
- `POST /api/contact` - Submit contact form

## Environment Variables

Refer to `.env.example` for required environment variables.

## License

MIT

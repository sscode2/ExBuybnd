import serverless from 'serverless-http';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env' });

// Import your existing server configuration
import { app } from '../../server.js';

// Export the handler for Netlify Functions
export const handler = serverless(app);
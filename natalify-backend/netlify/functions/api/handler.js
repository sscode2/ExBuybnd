import serverless from 'serverless-http';

// Import your existing server configuration
import { app } from '../../server.js';

// Export the handler for Netlify Functions
export const handler = serverless(app);
// Create this new file to manage API URLs
export const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-backend-url.onrender.com'  // Will add this later
  : 'http://localhost:3000'; 
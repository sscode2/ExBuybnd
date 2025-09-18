export const handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: 'Netlify Function is working!',
      timestamp: new Date().toISOString(),
    }),
  };
};
// Health check endpoint for Vercel
export default function handler(req, res) {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    message: 'Fraud Detection API is running'
  });
}

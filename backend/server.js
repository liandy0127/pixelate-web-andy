// backend/server.js

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Root route - basic health check
app.get('/', (req, res) => {
  res.send('Pixelate Backend is running!');
});

// Auth routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// ===== NEW: Protected route example =====
const authMiddleware = require('./middleware/authMiddleware');
app.get('/api/protected', authMiddleware, (req, res) => {
  // Because we verified the token, we have `req.user`
  // which contains whatever we put in the JWT payload (e.g. { userId, email })
  res.json({
    message: 'You have accessed a protected route!',
    user: req.user
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

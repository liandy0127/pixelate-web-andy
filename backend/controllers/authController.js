const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../config/db');

// Signup function
const signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if user already exists
    const userExists = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userExists.rows.length > 0) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Store new user in the database
    await pool.query('INSERT INTO users (email, password_hash) VALUES ($1, $2)', [email, hashedPassword]);

    // Generate JWT
    const token = jwt.sign(
      { email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(201).json({ message: 'User created successfully', token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Login function
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

    if (user.rows.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Compare passwords
    const validPassword = await bcrypt.compare(password, user.rows[0].password_hash);

    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT
    const token = jwt.sign(
      { userId: user.rows[0].id, email: user.rows[0].email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({ token });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { signup, login };

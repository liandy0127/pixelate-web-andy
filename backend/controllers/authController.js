// controllers/authController.js

const signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if email or password is missing
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }
    // Check if user already exists
    const userExists = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userExists.rows.length > 0) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Else if you want to check something else, e.g. invalid email format:
    // (Pretend checkEmailFormat is a helper function)
    // else if (!checkEmailFormat(email)) {
    //   return res.status(400).json({ error: 'Invalid email format.' });
    // }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user
    await pool.query('INSERT INTO users (email, password_hash) VALUES ($1, $2)', [email, hashedPassword]);

    // Generate JWT
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(201).json({ message: 'User created successfully', token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

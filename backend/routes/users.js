const express = require('express');
const router = express.Router();
const db = require('../db/db');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const auth = require('../middleware/auth'); // Import the auth middleware

// Fetch all users
router.get('/', async (req, res) => {
  try {
    const [results] = await db.promise().query('SELECT * FROM users');
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login route
router.post('/login', [
  body('email').isEmail().withMessage('Please enter a valid email address.'),
  body('password').notEmpty().withMessage('Password is required.')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    const [user] = await db.promise().query('SELECT * FROM users WHERE Email = ?', [email]);
    if (user.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    // Compare the plain text password with the stored password
    if (user[0].Password !== password) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    // Corrected line
    const token = jwt.sign({ id: user[0].UserID }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update user details
router.put('/update', auth, [
  body('name').notEmpty().withMessage('Name is required.'),
  body('email').isEmail().withMessage('Please enter a valid email address.'),
  body('phoneNumber').optional().isLength({ max: 15 }).withMessage('Phone number must be less than 15 characters.')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, phoneNumber } = req.body;
  const userId = req.user.id; // Get user ID from the token

  try {
      await db.promise().query('UPDATE users SET Name = ?, Email = ?, PhoneNumber = ? WHERE UserID = ?', [name, email, phoneNumber, userId]);
      res.json({ message: 'User  details updated successfully.' });
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});

// Fetch user details (for the profile) including booked events
router.get('/me', auth, async (req, res) => {
  const userId = req.user.id; // Get user ID from the token

  try {
    const [user] = await db.promise().query(`
      SELECT u.Name, u.Email, u.PhoneNumber, u.ProfilePicture, 
             b.EventID, e.EventName, b.BookingDate, b.Status
      FROM users u
      LEFT JOIN booking b ON u.UserID = b.UserID
      LEFT JOIN event e ON b.EventID = e.EventID
      WHERE u.UserID = ?`, [userId]);

    if (user.length === 0) {
      return res.status(404).json({ error: 'User  not found.' });
    }

    // Format the response to include booked events
    const userDetails = {
      Name: user[0].Name,
      Email: user[0].Email,
      PhoneNumber: user[0].PhoneNumber,
      ProfilePicture: user[0].ProfilePicture,
      bookedEvents: user.map(event => ({
        EventID: event.EventID,
        EventName: event.EventName,
        BookingDate: event.BookingDate,
        Status: event.Status
      })).filter(event => event.EventID !== null) // Filter out events that are null
    };

    res.json(userDetails); // Return the user details including booked events
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
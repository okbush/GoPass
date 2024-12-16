const express = require('express');
const router = express.Router();
const db = require('../db/db'); // Adjust the path if needed

// Fetch all users
router.get('/', async (req, res) => {
  try {
    const [results] = await db.promise().query('SELECT * FROM users');
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
module.exports = router;

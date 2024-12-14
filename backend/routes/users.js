const express = require('express');
const router = express.Router();
const db = require('../db/db'); // Adjust the path if needed

// Fetch all users
router.get('/', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.json(results);
    }
  });
});

module.exports = router;

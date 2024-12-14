const db = require('../db/db'); // Adjust the path if needed

// Fetch all users (Controller)
exports.getAllUsers = (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.json(results);
    }
  });
};

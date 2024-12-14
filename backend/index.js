const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json()); // for parsing application/json

// Database connection
const mysql = require('mysql2');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // default XAMPP user
  password: '', // default is empty
  database: 'eventmanagement',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Test endpoint
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

// User routes
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

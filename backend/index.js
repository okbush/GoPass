const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const path = require('path');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the "public/images" directory
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // XAMPP default user
    password: '', // XAMPP default password
    database: 'eventmanagement', // Replace with your actual database name
});

// Verify database connection
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        process.exit(1); // Stop the server if DB connection fails
    } else {
        console.log('Connected to MySQL database');
    }
});

// Route imports
const eventRoutes = require('./routes/event')(db); // Pass db to routes

// Use routes
app.use('/api/event', eventRoutes); // Route for events is '/api/event'

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'API is running' });
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

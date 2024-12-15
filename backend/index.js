const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db/db'); // Import the centralized DB connection

const PORT = process.env.PORT || 5000;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Serve static files from the "public/images" directory
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Route imports
const eventRoutes = require('./routes/event')(db); // Pass db to routes

// Use routes
app.use('/api/event', eventRoutes); // Route for events is '/api/event'

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'API is running' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
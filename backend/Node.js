const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db/db');                          // Import the centralized DB connection
const contactRoutes = require('./routes/contact');      // Import the contact route
const eventRoutes = require('./routes/event')(db);      // Pass db to event routes
const userRoutes = require('./routes/users');           // Import the user route

const app = express();                                  // Initialize app

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Use routes
app.use('/api/contact', contactRoutes);
app.use('/api/event', eventRoutes);
app.use('/api/users', userRoutes);

// Serve static files from the "public/images" directory
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'API is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
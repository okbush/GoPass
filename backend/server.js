const express = require('express');
const app = express();
const contactRoutes = require('./routes/contact'); // Import the contact route

const cors = require('cors');

// Enable CORS for all origins
app.use(cors());


app.use(express.json()); // Middleware to parse JSON request bodies

// Use the contact route at /api/contact
app.use('/api/contact', contactRoutes);

const port = 5000; // The port the server will run on
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


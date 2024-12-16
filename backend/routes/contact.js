const express = require('express');
const router = express.Router();

// POST endpoint to handle contact form submissions
router.post('/', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Check if all fields are provided
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required!' });
  }

  // Process the form data here (e.g., send email, save to DB, etc.)
  console.log(`Received contact form submission: 
  Name: ${name}, 
  Email: ${email}, 
  Subject: ${subject}, 
  Message: ${message}`);

  // Respond with a success message
  return res.status(200).json({ message: 'Message sent successfully!' });
});

module.exports = router;

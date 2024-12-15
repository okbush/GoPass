const express = require('express');

module.exports = (db) => {
    const router = express.Router();

    // Fetch all events
    router.get('/', (req, res) => {
        const query = `
            SELECT 
                EventID, 
                OrganizerID, 
                VenueID, 
                EventName, 
                Description, 
                DateStart, 
                DateEnd, 
                Time, 
                Status, 
                CreatedAt, 
                Availability, 
                Image 
            FROM event
        `;
        db.query(query, (err, results) => {
            if (err) {
                console.error('Error fetching events:', err);
                res.status(500).json({ error: 'Database query failed' });
            } else {
                res.json(results);
            }
        });
    });

    return router;
};

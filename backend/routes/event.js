const express = require('express');

module.exports = (db) => {
    const router = express.Router();

    // Fetch all events
    router.get('/', (req, res) => {
        const query = `
            SELECT 
                EventID AS id, 
                EventName AS title, 
                Description AS description, 
                Image AS image 
            FROM event`;
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

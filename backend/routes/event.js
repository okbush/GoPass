const express = require('express');

module.exports = (db) => {
    const router = express.Router();

    // Fetch all events
    router.get('/', async (req, res) => {
        const query = `
            SELECT 
                EventID AS id, 
                EventName AS title, 
                Description AS description, 
                Image AS image 
            FROM event
        `;
        try {
            const [results] = await db.promise().query(query); // Use promise-based query
            res.json({ status: 'success', data: results }); // Wrap results in an object
        } catch (err) {
            console.error('Error fetching events:', err);
            res.status(500).json({ error: 'Database query failed', details: err.message });
        }
    });

    // Fetch event by ID
    router.get('/:id', async (req, res) => {
        const { id } = req.params;
        const query = `
        SELECT 
            e.EventID AS id, 
            e.EventName AS title, 
            e.Description AS description, 
            e.Image AS image, 
            e.DateStart AS date, 
            e.Time AS time, 
            v.Name AS venue, 
            o.OrganizerName AS organizer 
        FROM event e
        JOIN venue v ON e.VenueID = v.VenueID
        JOIN organizer o ON e.OrganizerID = o.OrganizerID
        WHERE e.EventID = ?
    `;
        try {
            const [results] = await db.promise().query(query, [id]);
            if (results.length === 0) {
                return res.status(404).json({ error: 'Event not found' });
            }
            res.json({ status: 'success', data: results[0] });
        } catch (err) {
            console.error('Error fetching event:', err);
            res.status(500).json({ error: 'Database query failed', details: err.message });
        }
    });

    return router;
};
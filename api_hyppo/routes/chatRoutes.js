const express = require('express');
const router = express.Router();

module.exports = function(db) {
  // GET Chats by zone
  router.get('/:zone', (req, res) => {
    const zone = req.params.zone;
    const query = 'SELECT * FROM chat WHERE zone = ?';

    db.query(query, [zone], (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Database error', error: err });
      }
      res.json(results);
    });
  });

  // POST new chat message
  router.post('/:zone', (req, res) => {
    const { message, user_peudo, is_admin } = req.body;
    const zone = req.params.zone;

    if (!message || !user_peudo) {
      return res.status(400).json({ message: 'Message and user_peudo are required' });
    }

    const query = 'INSERT INTO chat (message, zone, user_peudo, is_admin) VALUES (?, ?, ?, ?)';
    db.query(query, [message, zone, user_peudo, is_admin || 0], (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Database error', error: err });
      }
      res.status(201).json({ message: 'Chat message posted', data: results });
    });
  });

  return router;
};

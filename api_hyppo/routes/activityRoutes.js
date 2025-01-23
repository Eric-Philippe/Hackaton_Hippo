const express = require('express');
const router = express.Router();

module.exports = function(db) {
  // GET Activities by zone
  router.get('/:zone', (req, res) => {
    const zone = req.params.zone;
    const query = 'SELECT id, title, description, irl_illustration, is_available, zone, type FROM activity WHERE zone = ?';

    db.query(query, [zone], (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Database error', error: err });
      }
      res.json(results);
    });
  });

  return router;
};

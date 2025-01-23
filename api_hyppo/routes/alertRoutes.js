const express = require('express');
const router = express.Router();

module.exports = function(db) {
  // GET Alerts by zone
  router.get('/:zone', (req, res) => {
    const zone = req.params.zone;
    const query = 'SELECT title FROM alert WHERE FIND_IN_SET(?, zones)';

    db.query(query, [zone], (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Database error', error: err });
      }
      res.json({ alertes: results });
    });
  });

  return router;
};

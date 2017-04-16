const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    'message': 'You requested index page'
  });
});

module.exports = router;

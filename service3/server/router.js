const express = require('express');
const router = express.Router();

const { getReviews, get10Reviews } = require('./controllers');

router
  .route('/:prodId')
  .get(getReviews)

router
  .route('/:prodId/:start')
  .get(get10Reviews);


module.exports = router;
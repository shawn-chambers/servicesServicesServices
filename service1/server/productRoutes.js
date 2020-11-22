const express = require('express');
const router = express.Router();

const productController = require('./controllers/productController');

router
  .route('/:prodId')
  .get(productController.getProduct);

module.exports = router;
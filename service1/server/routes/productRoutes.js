const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

router
  .post('/', productController.postProduct)
  .route('/:prodId')
  .get(productController.getProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
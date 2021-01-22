const router = require('express').Router();
const { getPicturesById } = require('./controllers')

router
  .route('/:prodId')
  .get(getPicturesById)

module.exports = {
  pictureRouter: router
}

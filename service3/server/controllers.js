const db = require('../db/index');

module.exports.getReviews = async (req, res) => {
  const product_id = req.params.prodId;
  try {
    let reviews = await db.Review.findAll({
      where: { product_id },
      include: [db.User]
    });
    if (!reviews) throw reviews;
    res.status(200).json({
      status: 'success',
      data: {
        reviews
      }
    })
  } catch (error) {
    res.status(404).json({
      status: 'failure',
      message: 'error getting reviews'
    })
  }
};

module.exports.get10Reviews = async (req, res) => {
  const product_id = req.params.prodId;
  const start = req.params.start;
  try {
    let reviews = await db.Review.findAll({
      offset: start,
      limit: 10,
      order: [
        ['review_date', 'DESC']
      ],
      where: { product_id },
      include: [db.User]
    });
    if (!reviews.length) throw reviews;
    res.status(200).json({
      status: 'success',
      data: {
        reviews
      }
    })
  } catch (error) {
    res.status(404).json({
      status: 'failure',
      message: 'error getting reviews'
    })
  }
};

module.exports.addReview = async (req, res) => {
  // TODO:
  // const product_id = req.params.prodId;
  // const review = req.body.review;
  // try {

  // } catch (error) {
  //   res.status(404).json({
  //     status: 'failure',
  //     message: 'error posting review'
  //   })
  // }
}
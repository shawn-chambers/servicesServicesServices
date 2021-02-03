const db = require('./index');
const { generateReviews, generateUsers } = require('./data-generation');

(async () => {
  try {
    let users = generateUsers(1000);
    let reviews = generateReviews(1000);
    await db.User.bulkCreate(users);
    await db.Review.bulkCreate(reviews);
    let query = await db.Review.findAll({
      attributes: ['product_id', [db.db.fn('AVG', db.db.col('rating')), 'average']],
      group: ['product_id'],
      order: [[db.db.fn('AVG', db.db.col('product_id')), 'ASC']]
    })
    let averages = query.map(review => {
      return review.dataValues;
    })
    await db.Product.bulkCreate(averages);
    await db.db.close();
  } catch (error) {
    console.error('error seeding data:', error);
  }
})();
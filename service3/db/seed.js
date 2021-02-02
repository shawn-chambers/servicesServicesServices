const db = require('./index');
const { generateReviews, generateUsers } = require('./data-generation');

(async () => {
  try {
    let users = generateUsers(1000);
    let reviews = generateReviews(1000);
    await db.User.bulkCreate(users);
    await db.Review.bulkCreate(reviews);
    await db.db.close();
  } catch (error) {
    console.error('error seeding data:', error);
  }
})();
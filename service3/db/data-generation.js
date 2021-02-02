const faker = require('faker');

const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const createFakeUser = () => ({
  username: faker.internet.userName(),
  thumbnail: getRandomColor(),
});

const createFakeReview = () => ({
  product_id: faker.random.number({ min: 1, max: 4 }),
  user_id: faker.random.number({min: 1, max: 100}),
  review_date: faker.date.past(),
  header: faker.lorem.sentence(3),
  review_text: faker.lorem.paragraph(3, 3),
  rating: faker.random.number({ min: 3, max: 5 }),
  would_recommend: faker.random.boolean()
});

module.exports.generateUsers = (total) => {
  let users = [];
  for (var i = 0; i < total; i ++) {
    users.push(createFakeUser());
  }
  return users;
}

module.exports.generateReviews = (total) => {
  let reviews = [];
  for (var i = 0; i < total; i ++) {
    reviews.push(createFakeReview());
  }
  return reviews;
}

const { Picture } = require('./models');
const { db } = require('./index');
const data = require('./data');


(() => {
  let entries = [];
  data.pictures.forEach((pictures, i) => {
    let pic = {
      prodId: i + 1,
      urls: [...pictures]
    }
    var entry = new Picture(pic);

    entries.push(entry.save())
  })
  Promise.all(entries)
    .then(() => db.close())
    .then(() => console.log('db seeded and connection closed'))
    .catch(err => console.error(err));
})();

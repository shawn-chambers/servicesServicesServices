const db = require('./index');
const { generate } = require('./data_generation');

(async () => {
  try {
    let products = generate(1000);
    await db.Product.sync()
    await db.Product.bulkCreate(products)
    await db.db.close()
  } catch (error) {
    console.log(err);
  }
}
)();
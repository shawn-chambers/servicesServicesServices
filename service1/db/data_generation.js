// const { db, Product } = require('./index');
const h = require('../helpers/helpers');

// id,
// name,
// description,
// features,
// sellPrice,
// originalPrice,
// type - thing (cleaning supplies, appliance, instrument, medical device?), idea

const generate = (total) => {
  let data = [];
  for (var i = 0; i < total; i ++) {
    let product = h.generateName();
    let price = +h.randomNumber(1000, 2) + h.randomizer([0.99, 0.75, 0.50])
    let prod = {
      name: product,
      description: h.generateDescription(product),
      features: h.generateFeatures(),
      price,
      salePrice: h.exists() ? Math.round(((price * h.randomizer([.80, .75, .50])) + Number.EPSILON) * 100) / 100 : null,
      category: h.generateType()
    }
    data.push(prod);
  }
  // console.log(Array.isArray(data[0].features[0]));
  return data;
}

module.exports.generate = generate;


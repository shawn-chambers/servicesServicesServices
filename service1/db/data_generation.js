const h = require('../helpers/helpers');

const generate = (total) => {
  let data = [];
  for (var i = 0; i < total; i ++) {
    let category = h.generateType();
    let product = h.generateName();
    let price = +h.randomNumber(1000, 2) + h.randomizer([0.99, 0.75, 0.50]);
    let sizes = h.generateSizes(category);
    let sizesAvailable = sizes.reduce((acc, curr) => {
      acc[curr] = h.exists() ? h.randomNumber(0, 30) : 0;
      return acc;
    }, {});

    let prod = {
      name: product,
      description: h.generateDescription(product),
      features: h.generateFeatures(),
      price,
      salePrice: h.exists() ? Math.round(((price * h.randomizer([.80, .75, .50])) + Number.EPSILON) * 100) / 100 : null,
      category,
      sizes,
      sizesAvailable: sizesAvailable,
      options: h.generateOptions()
    }
    data.push(prod);
  }

  return data;
}

module.exports.generate = generate;


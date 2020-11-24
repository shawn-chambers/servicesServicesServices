const db = require('../../db/index');

module.exports.getProduct = async (req, res) => {
  const id = req.params.prodId;

  try {
    let product = await db.Product.findOne({ where: { id } });
    if (!product) throw product;
    res.status(200).json({
      status: 'success',
      data: {
        product
      }
    });
  } catch (error) {
    res.status(404).json({
      status: 'failure',
      message: 'Error getting product'
    });
  };
};

module.exports.postProduct = async (req, res) => {
  const product = await req.body.product;

  try {
    let result = await db.Product.create(product);
    res.status(200).json({
      status: 'success',
      data: {
        result
      }
    });
  } catch (error) {
    res.status(404).json({
      status: 'failure',
      message: 'Error adding product'
    });
  };
};

module.exports.updateProduct = async (req, res) => {
  const product = await req.body.product;
  const id = req.params.prodId;

  try {
    let result = await db.Product.update(product, { where: { id } });
    res.status(200).json({
      status: 'success',
      data: {
        result
      }
    });
  } catch (error) {
    res.status(404).json({
      status: 'failure',
      message: 'Error updating product'
    });
  };
}

module.exports.deleteProduct = async (req, res) => {
  const id = req.params.prodId;

  try {
    let product = await db.Product.destroy({ where: { id } });
    if (!product) throw product;
    res.status(200).json({
      status: 'success',
      data: {
        product
      }
    });
  } catch (error) {
    res.status(404).json({
      status: 'failure',
      message: 'Error deleting product'
    });
  };
};
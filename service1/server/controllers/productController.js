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
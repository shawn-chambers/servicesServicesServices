const db = require('./db');
const { Picture } = require('./db/models');

module.exports.post = async (req, res) => {
  //TODO: post to aws s3 bucket
}

module.exports.getPicturesById = async (req, res) => {
  try {
    let prodId = req.params.prodId;
    const pics = await Picture.findOne({ prodId });
    if (!pics) throw 'Pictures not found';
    res.status(200).send({
      status: 'success',
      message: pics
    });
  } catch (error) {
    res.status(404).send({
      status: 'failure',
      message: error
    });
  }
}

module.exports.put = async (req, res) => {

}

module.exports.delete = async (req, res) => {

}

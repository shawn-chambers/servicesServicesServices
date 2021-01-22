const mongoose = require('mongoose');
const { Schema } = mongoose;

const pictureSchema = new Schema({
  prodId: Number,
  urls: {
    type: [String]
  }
});

const Picture = mongoose.model('Picture', pictureSchema);

module.exports = {
  Picture
}
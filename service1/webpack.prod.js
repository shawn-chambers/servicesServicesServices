const path = require('path');
const common = require('./webpack.config.js');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'descriptionBundle.js',
    path: path.resolve(__dirname, 'public')
  },
});
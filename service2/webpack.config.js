const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve('client/app.js'),
  output: {
    filename: 'imageBundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
              '@babel/preset-env'
            ]
          }
        }
      }
    ]
  }
}
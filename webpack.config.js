var path = require('path');

module.exports = {
  entry: './webapp/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'app-webpack.bundle.js'
  }
};
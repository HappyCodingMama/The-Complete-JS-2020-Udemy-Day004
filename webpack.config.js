const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.rewolve(__dirname, '/js'),
    filename: 'bundle.js'
  },
  mode: 'development'
};
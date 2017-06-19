import rules from './webpack.config.loaders'
const path = require('path');

module.exports = {
  entry: './src/app-component.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules
  },
};


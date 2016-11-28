const webpack = require('webpack');

module.exports = {
  entry: './client/src/index.jsx',
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
  },
  devServer: { inline: true },
  output: {
    path: __dirname,
    publicPath: '/assets/',
    filename: 'bundle.js',
  },
  externals: {
    _: 'lodash',
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.csv$/, loader: 'dsv-loader' },
      { test: /\.json$/, loader: 'json' },
      { test: /\.jsx?$/, loader: 'babel' },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({ _: 'lodash' }),
  ],
};

module.exports = {
  entry: './index.jsx',
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  output: {
    path: __dirname,
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.csv$/, loader: 'dsv-loader' },
      { test: /\.json$/, loader: 'json' },
      { test: /\.jsx?$/, loader: 'babel' }
    ]
  }
}
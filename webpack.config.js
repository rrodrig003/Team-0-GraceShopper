module.exports = {
  entry: ['babel-polyfill', './client/index.js'],
  output: {
    path: __dirname,
    filename: './server/public/bundle.js',
  },
  mode: 'development',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
};

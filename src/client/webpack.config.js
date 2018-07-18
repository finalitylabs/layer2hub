const path = require('path')

module.exports = {
  entry: './index.ts',
  devtool: 'source-map',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'layer2hub-client.js',
    path: path.resolve(__dirname, 'dist')
  }
}
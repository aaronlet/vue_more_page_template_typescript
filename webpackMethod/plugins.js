const CompressionWebpackPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const plugins = [
  new CompressionWebpackPlugin({
    filename: '[path].gz[query]',
    algorithm: 'gzip',
    test: /\.(js|css|svg|woff|ttf|json|html)$/,
    threshold: 10240,
    minRatio: 0.8, 
    deleteOriginalAssets: false
  })
];

module.exports = plugins;

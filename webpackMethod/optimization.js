const UglifyPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  minimizer: [
    // new UglifyPlugin({
    //   uglifyOptions: {
    //     warnings: false,
    //     compress: {
    //       drop_console: true, 
    //       drop_debugger: false,
    //       pure_funcs: ['console.log'] 
    //     }
    //   },
    //   parallel:true
    // })
  ],
  splitChunks: {
    cacheGroups: {
      vendors: {
        chunks: 'all',
        test: /node_modules/,
        name: 'chunk-vendors',
        minChunks: 1,
        maxInitialRequests: 5,
        minSize: 0,
        priority: 100
      },
      common: {
        chunks: 'all',
        test: /[\\/]src[\\/]js[\\/]/,
        name: 'common',
        minChunks: 2,
        maxInitialRequests: 5,
        minSize: 0,
        priority: 60
      },
      styles: {
        name: 'styles',
        test: /\.(sa|sc|c)ss$/,
        chunks: 'all',
        enforce: true
      },
      runtimeChunk: {
        name: 'manifest'
      }
    }
  }
}

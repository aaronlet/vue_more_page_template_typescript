const externals = require("./webpackMethod/externals");
const plugins = require("./webpackMethod/plugins");
const htmls = require("./webpackMethod/pages");
const optimization = require("./webpackMethod/optimization");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    configureWebpack: (config) => {
        config.externals = externals;
        config.plugins = [...config.plugins,...plugins];
        config.optimization = optimization;
    },
    pages:htmls,
    publicPath: './',           
    outputDir: 'dist',        
    devServer: {
        open: true,             
        index: '/IndexPage.html'    
    },
    productionSourceMap: false,
    css: {
        extract: true,
        sourceMap: false,
        modules: false,
        requireModuleExtension: false,
        loaderOptions: {
            css: {
                modules: {
                    localIdentName: '[name]-[hash]'
                },
                localsConvention: 'camelCaseOnly'
            }
        }
    }
};

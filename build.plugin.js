const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');

module.exports = ({ onGetWebpackConfig }) => {
  onGetWebpackConfig((config) => {
    config.merge({
      node: {
        fs: 'empty',
      },
    });

    config.module // fixes https://github.com/graphql/graphql-js/issues/1272
      .rule('mjs$')
      .test(/\.mjs$/)
      .include.add(/node_modules/)
      .end()
      .type('javascript/auto');

    config.module
      .rule('vue')
      .test(/\.vue$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end();

    config.plugin('vue-loader-plugin').use(VueLoaderPlugin);
    config.merge({
      output: {
        path: path.resolve(__dirname, 'lib'),
        library: 'LowCodeSchemaComp',
        libraryTarget: 'umd',
      }
    });

    config.plugin('html').use(HtmlWebpackPlugin, [
      {
        inject: false,
        template: require.resolve('./public/index.html'),
        filename: 'index.html',
      },
    ]);

    config.resolve.merge({
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    });
  });
};

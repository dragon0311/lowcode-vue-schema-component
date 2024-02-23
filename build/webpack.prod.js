const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = env => {
    let pro_config = {
        mode: 'production',
        // devtool:'source-map',//开启将会生成map文件
        entry: './src/components/index.js',
        output: {
            filename: 'lowcode-vue-schema-component.js',
            library: 'lowcode-vue-schema-component',
            libraryTarget: 'umd'
        }
    }

    return merge(common(env), pro_config)  //合并配置
}

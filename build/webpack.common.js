const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env) => {
	return {
		entry: './src/main.js', //入口文件
		output: {
			// filename: 'assets/js/[name].code.js',
			// chunkFilename: 'assets/js/[name].bundle.js',//动态导入 分离bundle 比如lodashjs配合注释import(/* webpackChunkName: "lodash" */ 'lodash') 会打包成lodash.bundle.js
			path: path.resolve(__dirname, '../dist'),
		},

		plugins: [
			new VueLoaderPlugin(),
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({
				template: path.join(__dirname, '../public/index.html'),
				filename: 'index.html', //输出的文件名
			}),
		],
		resolve: {  //配置模块如会解析
			extensions: ['.vue', '.js', '.json'],//引入这些文件 可以不带后缀 按顺序解析
			alias: {
				'@': path.resolve(__dirname, 'src'), //@方式引入资源
			}
		},
		module: {
			rules: [
				{
					test: /\.vue$/,
					loader: 'vue-loader',
				},
				// 它会应用到普通的 `.js` 文件以及 `.vue` 文件中的 `<script>` 块
				{
					test: /\.m?js$/,
					exclude: /(node_modules)/,
					use: {
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-env"],
						},
					},
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'vue-style-loader', 'css-loader']
				},
			],
		},
	};
};

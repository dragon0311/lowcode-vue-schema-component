const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const ip = require("ip");

let port = "8082";

module.exports = (env) => {
	let dev_config = {
		devtool: 'inline-source-map',//开启source map
		mode: "development",
		plugins: [
			//运行成功，输出信息
			new FriendlyErrorsPlugin({
				compilationSuccessInfo: {
					messages: [
						`You application is running here http://${ip.address()}:${port} \r\nYou can also open local address http://localhost:${port}`,
					],
					clearConsole: true,
				},
			}),
		],
	};

	return merge(common(env), dev_config);
};

'use strict';
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: './include.js',

	output: {
		filename: 'application.js',
		path: __dirname + '/public',
	},

	watchOptions: {
		aggregateTimeout: 500
	},

	module: {
		rules: [{
			test: /\.js$/,
			loader: 'babel-loader',
		}, {
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: "css-loader"
			})
		}, {
			test: /\.(jpe?g|png|gif|svg)$/i,
			loader: "url-loader?name=app/images/[name].[ext]"
		}],
	},

	plugins: [
		new ExtractTextPlugin("application.css"),
	],
};

const path = require('path');

module.exports = {
	entry: './app/assets/scripts/App.js',
	output: {
		path: path.join(__dirname, 'app', 'temp', 'scripts'),
		filename: 'bundle.js'
	},
	// module: {
	// 	loaders: [
	// 		{
	// 			loader: 'babel-loader',
	// 			query: {
	// 				presets: ['es2015']
	// 			},
	// 			test: /\.js$/,
	// 			exclude: /node_modules/
	// 		}
	// 	]
	// }
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015']
					}
				},
				exclude: /node_modules/
			}
		]
	},
	resolveLoader: {
		modules: ['node_modules', __dirname + '/client/node_modules'],
		moduleExtensions: ['-loader']
	}
};

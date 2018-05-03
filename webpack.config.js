const path = require('path');

module.exports = {
	entry: {
		App: './app/assets/scripts/App.js',
		Vendor: './app/assets/scripts/Vendor.js'
	},
	output: {
		path: path.join(__dirname, 'app', 'temp', 'scripts'),
		filename: '[name].js'
	},
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
	}
	// resolveLoader: {
	// 	modules: ['node_modules', __dirname + '/client/node_modules'],
	// 	moduleExtensions: ['-loader']
	// }
};

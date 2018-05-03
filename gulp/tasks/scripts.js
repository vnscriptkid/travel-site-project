const gulp = require('gulp');
webpack = require('webpack');

gulp.task('scripts', ['modernizr'], callback => {
	webpack(require('../../webpack.config.js'), (err, stats) => {
		if (err) {
			console.log(err.toString());
		}
		console.log(stats.toString());
		// console.log('Completed bundling javascript');
		callback();
	});
});

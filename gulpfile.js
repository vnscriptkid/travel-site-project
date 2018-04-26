const gulp = require('gulp'),
	watch = require('gulp-watch'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	cssvars = require('postcss-simple-vars'),
	nested = require('postcss-nested');

gulp.task('default', () => {
	console.log('This is a default gulp task');
});

gulp.task('html', () => {
	console.log('Something useful with html');
});

gulp.task('styles', () => {
	return gulp
		.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssvars, nested, autoprefixer]))
		.pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', () => {
	watch('./app/index.html', () => {
		gulp.start('html');
	});

	watch('./app/assets/styles/**/*.css', () => {
		gulp.start('styles');
	});
});

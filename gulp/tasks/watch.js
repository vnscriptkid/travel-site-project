const gulp = require('gulp'),
	watch = require('gulp-watch'),
	browserSync = require('browser-sync').create();

gulp.task('watch', () => {
	browserSync.init({
		server: {
			baseDir: 'app'
		}
	});

	watch('./app/index.html', () => {
		// gulp.start('html');
		browserSync.reload();
	});

	watch('./app/assets/styles/**/*.css', () => {
		// gulp.start('styles');
		gulp.start('cssInject');
	});

	watch('./app/assets/**/*.js', () => {
		// gulp.start('scripts');
		gulp.start('scriptsRefresh');
	});
});

gulp.task('cssInject', ['styles'], () => {
	return gulp.src('./app/temp/styles/styles.css').pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], () => {
	browserSync.reload();
});

var gulp 				= require('gulp'),
	mainBowerFiles 		= require('main-bower-files'),
	concatCss 			= require('gulp-concat-css'),
	less 				= require('gulp-less'),
	LessAutoprefix 		= require('less-plugin-autoprefix'),
	path 				= require('path'),
	livereload			= require('gulp-livereload'),
	// uncss 				= require('gulp-uncss'),
	connect 			= require('gulp-connect'),
	watch 				= require('gulp-watch');

gulp.task('connect', function() {
		connect.server({
			root: 'app',
			livereload: true
		});
	});

gulp.task('mainfilesJS', function() {
	return gulp.src(mainBowerFiles('**/*.js', {
		'overrides':  {
			'react': {
				'main': [
					'react-dom.development.js',
					'react.development.js'
				]
			}
		}
	}))
	.pipe(gulp.dest('dist/js'))
});

gulp.task('mainHTML', function() {
	return gulp.src('./*.html')
	.pipe(gulp.dest('app'))
	.pipe(connect.reload())
});
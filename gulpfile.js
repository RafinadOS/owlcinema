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
			},
			'babel': {
				'main': [
					'browser.js',
					// 'browser-polyfill.js'
				]
			}
		}
	}))
	.pipe(gulp.dest('dist/js/lib'))
});

gulp.task('mainHTML', function() {
	return gulp.src('./*.html')
	.pipe(gulp.dest('app'))
	.pipe(connect.reload())
});

gulp.task('mainJS', function() {
	return gulp.src('./dist/js/lib/*.js')
	.pipe(gulp.dest('app/js/lib'))
	.pipe(connect.reload())
});

gulp.task('watch', function()
{
	gulp.watch('*.html', ['mainHTML'])
	gulp.watch('dist/**/*.js', ['mainJS'])
});

gulp.task('default', [
	'connect',
	'mainfilesJS',
	'mainJS',
	'mainHTML',
	'watch'
]);

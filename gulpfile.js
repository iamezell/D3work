var gulp = require('gulp');

var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var watchify = require('watchify');

gulp.task('default', function(){
	//place code in here
	return browserify('src/js/app.js')
	.bundle()
	//Pass desired output filename to vinyl-source-stream
	.pipe(source('bundle.js'))
	.pipe(gulp.dest('./public/javascripts'))
})
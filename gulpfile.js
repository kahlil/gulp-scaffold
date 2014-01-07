'use strict';
var gulp = require('gulp');
var template = require('gulp-template');
var argv = require('optimist').argv;

// Scaffold a README.md.
// `gulp readme --headline="My Headline" --description="Some description."`
gulp.task('readme', function () {
  gulp.src('templates/README.md')
    .pipe(template(argv))
    .pipe(gulp.dest('results/readme'));
});

// Scaffold a JavaScript module.
// `gulp module --name="moduleName"`
gulp.task('plugin', function() {
	gulp.src('templates/module.js')
		.pipe(template(argv))
		.pipe(gulp.dest('results/module/' + argv.name.toLowerCase() + '.js'));
});

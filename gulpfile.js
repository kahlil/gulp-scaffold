var gulp = require('gulp');
var template = require('gulp-template');

gulp.task('default', function () {
    gulp.src('test/templates/template.md')
        .pipe(template(require('optimist').argv))
        .pipe(gulp.dest('test/result'));
});

var purify = require('gulp-purifycss');
var gulp = require('gulp');

gulp.task('css', function() {
  return gulp.src('./index.html')
    .pipe(purify(['./index.html']))
    .pipe(gulp.dest('./dist/'));
});
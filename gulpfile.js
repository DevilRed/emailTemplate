const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');

gulp.task('minify', () => {
  return gulp.src('./index.html')
    .pipe(htmlmin({
    	collapseWhitespace: true,
    	removeComments: true
    }))
    .pipe(gulp.dest('dist'));
});
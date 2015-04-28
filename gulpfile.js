var gulp = require('gulp');
var uglify = require('gulp-uglify');

var paths = {
  scripts: ['*.js'],
  images: ['*.jpg', '*.png']
};

gulp.task('default', function() {
  return gulp.src(paths.scripts)
    .pipe(uglify())
    .pipe(gulp.dest('build'));
});
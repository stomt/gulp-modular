'use strict';

var gulpif = require('gulp-if'),
  rev = require('gulp-rev');

module.exports = function(gulp, src, dest, revFlag) {
  gulp.task('fonts', function () {
    return gulp.src(src)
      .pipe(gulpif(revFlag, rev()))
      .pipe(gulp.dest(dest))
      .pipe(gulpif(revFlag, rev.manifest()))
      .pipe(gulpif(revFlag, gulp.dest(dest)));
  });
};

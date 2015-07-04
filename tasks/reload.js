'use strict';

var connect = require('gulp-connect'),
  liveReload = require('gulp-livereload');

module.exports = function(gulp, src) {
  gulp.task('reload', function() {
    return gulp.src(src)
      .pipe(liveReload())
      .pipe(connect.reload());
  });
};

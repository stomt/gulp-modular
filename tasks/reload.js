'use strict';

var connect = require('gulp-connect');


module.exports = function(gulp, src) {
  gulp.task('reload', function() {
    return gulp.src(src)
      .pipe(connect.reload());
  });
};

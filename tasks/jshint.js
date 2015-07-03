'use strict';

var jshint = require('gulp-jshint');


module.exports = function(gulp, src) {
  gulp.task('jshint', function() {
    return gulp.src(src)
      .pipe(jshint('.jshintrc'))
      .pipe(jshint.reporter('jshint-stylish'));
  });
};

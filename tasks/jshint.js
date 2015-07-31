'use strict';

var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

module.exports = function(gulp, src) {
  gulp.task('jshint', function() {
    return gulp.src(src)
      .pipe(jshint())
      .pipe(jshint.reporter(stylish));
  });
};

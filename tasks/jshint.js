'use strict';

var jshint = require('gulp-jshint'),
  stylish = require('jshint-stylish');

module.exports = function(gulp, config) {
  gulp.task('jshint', function() {
    return gulp.src(config.jshint.src)
      .pipe(jshint())
      .pipe(jshint.reporter(stylish));
  });
};

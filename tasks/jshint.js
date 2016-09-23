'use strict';

var jshint = require('gulp-jshint'),
  gulpif = require('gulp-if'),
  stylish = require('jshint-stylish');

module.exports = function(gulp, config) {
  gulp.task('jshint', function() {
    return gulp.src(config.jshint.src)
      .pipe(jshint())
      .pipe(jshint.reporter(stylish))
      .pipe(gulpif(!!config.jshint.reporter, jshint.reporter(config.jshint.reporter)));
  });
};

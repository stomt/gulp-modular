'use strict';

var ngConstant = require('gulp-ng-constant'),
  gulpif = require('gulp-if'),
  rev = require('gulp-rev'),
  uglify = require('gulp-uglify');

module.exports = function(gulp, constants, name, dest, revFlag) {
  gulp.task('configScripts', function() {
    ngConstant({
        constants: constants,
        name: name,
        stream: true
      })
      .pipe(uglify())
      .pipe(gulpif(revFlag, rev()))
      .pipe(gulp.dest(dest));
  });
};

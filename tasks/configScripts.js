'use strict';

var ngConstant = require('gulp-ng-constant'),
  //gulpif = require('gulp-if'),
  //rev = require('gulp-rev'),
  uglify = require('gulp-uglify');

module.exports = function(gulp, constants, name, dest) {
  gulp.task('configScripts', function() {
    ngConstant({
        constants: constants,
        name: name
      })
      .pipe(uglify())
      //.pipe(gulpif(config.env.rev, rev()))
      .pipe(gulp.dest(dest));
  });
};

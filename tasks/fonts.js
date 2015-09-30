'use strict';

var gulpif = require('gulp-if'),
  rev = require('gulp-rev');

module.exports = function(gulp, config) {
  gulp.task('fonts', function () {
    return gulp.src(config.fonts.src)
      .pipe(gulpif(config.build.rev, rev()))
      .pipe(gulp.dest(config.fonts.dest))
      .pipe(gulpif(config.build.rev, rev.manifest()))
      .pipe(gulpif(config.build.rev, gulp.dest(config.fonts.dest)));
  });
};

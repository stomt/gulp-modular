'use strict';

//var gulpif = require('gulp-if'),
//  rev = require('gulp-rev'),

module.exports = function(gulp, src, dest) {
  gulp.task('fonts', function () {
    return gulp.src(src)
      //.pipe(gulpif(config.rev, rev()))
      .pipe(gulp.dest(dest));
      //.pipe(gulpif(config.rev, rev.manifest()))
      //.pipe(gulpif(config.rev, gulp.dest(dest)));
  });
};

'use strict';

var bowerFiles = require('main-bower-files'),
  gulpif = require('gulp-if'),
  rev = require('gulp-rev'),
  debug = require('gulp-debug');

var fontsFilter = {
  filter: /\.(otf|eot|svg|ttf|woff)/i
};

module.exports = function(gulp, debugFlag, dest, revFlag) {
  gulp.task('vendorFonts', ['bower:install', 'bower:prune'], function() {
    return gulp.src(bowerFiles(fontsFilter))
      .pipe(gulpif(debugFlag, debug()))
      .pipe(gulpif(revFlag, rev()))
      .pipe(gulp.dest(dest))
      .pipe(gulpif(revFlag, rev.manifest()))
      .pipe(gulpif(revFlag, gulp.dest(dest)));
  });
};

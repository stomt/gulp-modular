'use strict';

var bowerFiles = require('main-bower-files'),
  gulpif = require('gulp-if'),
  rev = require('gulp-rev'),
  debug = require('gulp-debug'),
  _ = require('underscore');

var fontsFilter = {
  filter: /\.(otf|eot|svg|ttf|woff)/i
};

module.exports = function(gulp, tasks, dest, debugFlag, revFlag) {
  var mergedTasks = _.intersection(tasks, ['bower:install', 'bower:prune']);
  gulp.task('bowerFonts', mergedTasks, function() {
    return gulp.src(bowerFiles(fontsFilter))
      .pipe(gulpif(debugFlag, debug()))
      .pipe(gulpif(revFlag, rev()))
      .pipe(gulp.dest(dest))
      .pipe(gulpif(revFlag, rev.manifest()))
      .pipe(gulpif(revFlag, gulp.dest(dest)));
  });
};

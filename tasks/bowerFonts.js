'use strict';

var bowerFiles = require('main-bower-files'),
  gulpif = require('gulp-if'),
  rev = require('gulp-rev'),
  debug = require('gulp-debug'),
  _ = require('underscore');

var fontsFilter = {
  filter: /\.(otf|eot|svg|ttf|woff)/i
};

module.exports = function(gulp, config) {
  var tasks = _.intersection(_.keys(gulp.tasks), ['bower:install', 'bower:prune']);
  gulp.task('bowerFonts', tasks, function() {
    return gulp.src(bowerFiles(fontsFilter))
      .pipe(gulpif(config.build.bowerDebug, debug()))
      .pipe(gulpif(config.build.rev, rev()))
      .pipe(gulp.dest(config.bowerFonts.dest))
      .pipe(gulpif(config.build.rev, rev.manifest()))
      .pipe(gulpif(config.build.rev, gulp.dest(config.bowerFonts.dest)));
  });
};

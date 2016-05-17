'use strict';

var bowerFiles = require('main-bower-files'),
  gulpif = require('gulp-if'),
  debug = require('gulp-debug'),
  sourceMaps = require('gulp-sourcemaps'),
  newer = require('gulp-newer'),
  concat = require('gulp-concat'),
  rev = require('gulp-rev'),
  cleanCSS = require('gulp-clean-css'),
  _ = require('underscore');

var isFirstRun = true;
var vendorFile = 'vendor.css';
var cssFilter = {
  filter: /\.css$/i
};

module.exports = function(gulp, config) {
  var tasks = _.intersection(_.keys(gulp.tasks), ['bower:install', 'bower:prune']);
  gulp.task('bowerStyles', tasks, function(done) {
    gulp.src(bowerFiles(cssFilter))
      .pipe(gulpif(config.build.bowerDebug, debug()))
      .pipe(sourceMaps.init())
      .pipe(gulpif(isFirstRun, newer(config.bowerStyles.dest + vendorFile)))
      .pipe(concat(vendorFile))
      .pipe(cleanCSS())
      .pipe(gulpif(config.build.rev, rev()))
      .pipe(sourceMaps.write(config.build.sourceMapPath))
      .pipe(gulp.dest(config.bowerStyles.dest))
      .pipe(gulpif(config.build.rev, rev.manifest({merge: true})))
      .pipe(gulpif(config.build.rev, gulp.dest(config.statics.dest)));

    isFirstRun = false;

    done();
  });
};

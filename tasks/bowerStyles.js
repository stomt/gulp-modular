'use strict';

var bowerFiles = require('main-bower-files'),
  gulpif = require('gulp-if'),
  debug = require('gulp-debug'),
  sourceMaps = require('gulp-sourcemaps'),
  newer = require('gulp-newer'),
  concat = require('gulp-concat'),
  rev = require('gulp-rev'),
  minifyCSS = require('gulp-minify-css'),
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
      .pipe(minifyCSS({
        keepSpecialComments: 0
      }))
      .pipe(gulpif(config.build.rev, rev()))
      .pipe(sourceMaps.write(config.build.sourceMapPath))
      .pipe(gulp.dest(config.bowerStyles.dest));

    isFirstRun = false;

    done();
  });
};

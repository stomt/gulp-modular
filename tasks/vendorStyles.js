'use strict';

var bowerFiles = require('main-bower-files'),
  gulpif = require('gulp-if'),
  debug = require('gulp-debug'),
  sourceMaps = require('gulp-sourcemaps'),
  newer = require('gulp-newer'),
  concat = require('gulp-concat'),
  minifyCSS = require('gulp-minify-css');


var isFirstRun = true;
var vendorFile = 'vendor.css';
var cssFilter = {
  filter: /\.css$/i
};

module.exports = function(gulp, dest, sourceMapsPath, debugFlag) {
  gulp.task('vendorStyles', ['bower:install', 'bower:prune'], function(done) {
    gulp.src(bowerFiles(cssFilter))
      .pipe(gulpif(debugFlag, debug()))
      .pipe(sourceMaps.init())
      .pipe(gulpif(isFirstRun, newer(dest + vendorFile)))
      .pipe(concat(vendorFile))
      .pipe(minifyCSS({
        keepSpecialComments: 0
      }))
      .pipe(sourceMaps.write(sourceMapsPath))
      .pipe(gulp.dest(dest));

    isFirstRun = false;

    done();
  });
};

'use strict';

var bowerFiles = require('main-bower-files'),
  gulpif = require('gulp-if'),
  debug = require('gulp-debug'),
  sourceMaps = require('gulp-sourcemaps'),
  newer = require('gulp-newer'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify');


var isFirstRun = true;
var vendorFile = 'vendor.js';
var jsFilter = {
  filter: /\.js$/i
};

module.exports = function(gulp, dest, sourceMapPath, production, debugFlag) {
  gulp.task('vendorScripts', ['bower:install', 'bower:prune'], function(done) {
    gulp.src(bowerFiles(jsFilter))
      .pipe(gulpif(debugFlag, debug()))
      .pipe(sourceMaps.init())
      .pipe(gulpif(isFirstRun, newer(dest + vendorFile)))
      .pipe(concat(vendorFile))
      .pipe(gulpif(production, uglify()))
      .pipe(sourceMaps.write(sourceMapPath))
      .pipe(gulp.dest(dest));

    isFirstRun = false;

    done();
  });
};

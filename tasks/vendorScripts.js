'use strict';

var bowerFiles = require('main-bower-files'),
  gulpif = require('gulp-if'),
  debug = require('gulp-debug'),
  sourceMaps = require('gulp-sourcemaps'),
  newer = require('gulp-newer'),
  concat = require('gulp-concat'),
  rev = require('gulp-rev'),
  uglify = require('gulp-uglify'),
  _ = require('underscore');


var isFirstRun = true;
var vendorFile = 'vendor.js';
var jsFilter = {
  filter: /\.js$/i
};

module.exports = function(gulp, tasks, dest, sourceMapPath, debugFlag, revFlag) {
  var mergedTasks = _.intersection(tasks, ['bower:install', 'bower:prune']);
  gulp.task('vendorScripts', mergedTasks, function() {
    var result = gulp.src(bowerFiles(jsFilter))
      .pipe(gulpif(debugFlag, debug()))
      .pipe(sourceMaps.init())
      .pipe(gulpif(isFirstRun, newer(dest + vendorFile)))
      .pipe(concat(vendorFile))
      .pipe(uglify())
      .pipe(gulpif(revFlag, rev()))
      .pipe(sourceMaps.write(sourceMapPath))
      .pipe(gulp.dest(dest));

    isFirstRun = false;
    return result;
  });
};

var gulp = require('gulp'),
  bowerFiles = require('main-bower-files'),
  gulpif = require('gulp-if'),
  debug = require('gulp-debug'),
  sourceMaps = require('gulp-sourcemaps'),
  newer = require('gulp-newer'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  config = require('../../gulp_config');


var isFirstRun = true;
var vendorFile = 'vendor.js';
var jsFilter = {
  filter: /\.js$/i
};

gulp.task('vendorScripts', ['bower:install', 'bower:prune'], function(done) {
  gulp.src(bowerFiles(jsFilter))
    .pipe(gulpif(config.debug, debug()))
    .pipe(sourceMaps.init())
    .pipe(gulpif(isFirstRun, newer(config.dist.js + vendorFile)))
    .pipe(concat(vendorFile))
    .pipe(gulpif(config.production, uglify()))
    .pipe(sourceMaps.write(config.sourcemapPath))
    .pipe(gulp.dest(config.dist.js));

  isFirstRun = false;

  done();
});

var gulp = require('gulp'),
  bowerFiles = require('main-bower-files'),
  sourceMaps = require('gulp-sourcemaps'),
  newer = require('gulp-newer'),
  concat = require('gulp-concat'),
  gulpif = require('gulp-if'),
  uglify = require('gulp-uglify'),
  config = require('../gulp_config');


var vendorFile = 'vendor.js';
var jsFilter = {
  filter: /\.js$/i
};

gulp.task('vendorScripts', ['bower:install', 'bower:prune'], function() {
  return gulp.src(bowerFiles(jsFilter))
    .pipe(sourceMaps.init())
    .pipe(newer(config.dist.js + vendorFile))
    .pipe(concat(vendorFile))
    .pipe(gulpif(config.production, uglify()))
    .pipe(sourceMaps.write(config.sourcemapPath))
    .pipe(gulp.dest(config.dist.js));
});

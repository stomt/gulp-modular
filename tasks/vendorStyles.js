var gulp = require('gulp'),
  bowerFiles = require('main-bower-files'),
  gulpif = require('gulp-if'),
  debug = require('gulp-debug'),
  sourceMaps = require('gulp-sourcemaps'),
  newer = require('gulp-newer'),
  concat = require('gulp-concat'),
  minifyCSS = require('gulp-minify-css'),
  config = require('../../gulp_config');


var isFirstRun = true;
var vendorFile = 'vendor.css';
var cssFilter = {
  filter: /\.css$/i
};

gulp.task('vendorStyles', ['bower:install', 'bower:prune'], function(done) {
  gulp.src(bowerFiles(cssFilter))
    .pipe(gulpif(config.debug, debug()))
    .pipe(sourceMaps.init())
    .pipe(gulpif(isFirstRun, newer(config.dist.css + vendorFile)))
    .pipe(concat(vendorFile))
    .pipe(minifyCSS({
      keepSpecialComments: 0
    }))
    .pipe(sourceMaps.write(config.sourceMapsPath))
    .pipe(gulp.dest(config.dist.css));

  isFirstRun = false;

  done();
});

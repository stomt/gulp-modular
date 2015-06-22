var gulp = require('gulp'),
  bowerFiles = require('main-bower-files'),
  sourceMaps = require('gulp-sourcemaps'),
  newer = require('gulp-newer'),
  concat = require('gulp-concat'),
  minifyCSS = require('gulp-minify-css'),
  config = require('../gulp_config');


var vendorFile = 'vendor.css';
var cssFilter = {
  filter: /\.css$/i
};

gulp.task('vendorStyles', ['bower:install', 'bower:prune'], function() {
  return gulp.src(bowerFiles(cssFilter))
    .pipe(sourceMaps.init())
    .pipe(newer(config.dist.css + vendorFile))
    .pipe(concat(vendorFile))
    .pipe(minifyCSS({
      keepSpecialComments: 0
    }))
    .pipe(sourceMaps.write(config.sourceMapsPath))
    .pipe(gulp.dest(config.dist.css));
});

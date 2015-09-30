'use strict';

var newer = require('gulp-newer'),
  imagemin = require('gulp-imagemin'),
  flatten = require('gulp-flatten');

module.exports = function(gulp, config) {
  gulp.task('images', function() {
    return gulp.src(config.images.src)
      .pipe(newer(config.images.dest))
      .pipe(imagemin())
      .pipe(flatten())
      .pipe(gulp.dest(config.images.dest));
  });
};

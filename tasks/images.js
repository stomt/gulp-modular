'use strict';

var newer = require('gulp-newer'),
  imagemin = require('gulp-imagemin'),
  flatten = require('gulp-flatten');


module.exports = function(gulp, src, dest) {
  gulp.task('images', function() {
    return gulp.src(src)
      .pipe(newer(dest))
      .pipe(imagemin())
      .pipe(flatten())
      .pipe(gulp.dest(dest));
  });
};

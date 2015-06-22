var gulp = require('gulp'),
  newer = require('gulp-newer'),
  imagemin = require('gulp-imagemin'),
  flatten = require('gulp-flatten'),
  config = require('../gulp_config');


gulp.task('images', function() {
  return gulp.src(config.app.images)
    .pipe(newer(config.dist.images))
    .pipe(imagemin())
    .pipe(flatten())
    .pipe(gulp.dest(config.dist.images));
});

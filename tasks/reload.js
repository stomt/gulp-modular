var gulp = require('gulp'),
  connect = require('gulp-connect'),
  config = require('../gulp_config');


gulp.task('reload', function() {
  return gulp.src(config.bases.dist)
    .pipe(connect.reload());
});

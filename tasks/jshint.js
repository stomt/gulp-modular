var gulp = require('gulp'),
  jshint = require('gulp-jshint'),
  config = require('../gulp_config');


gulp.task('jshint', function() {
  return gulp.src(config.app.alljs)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

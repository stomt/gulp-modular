var gulp = require('gulp'),
  bower = require('gulp-bower');


gulp.task('bower:prune', function() {
  return bower({cmd: 'prune'});
});

gulp.task('bower:install', function() {
  return bower();
});

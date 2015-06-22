var gulp = require('gulp'),
  config = require('../gulp_config');


gulp.task('statics', function() {
  return gulp.src(config.app.statics)
    .pipe(gulp.dest(config.bases.dist));
});

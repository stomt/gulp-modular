var gulp = require('gulp'),
  ngConstant = require('gulp-ng-constant'),
  config = require('../gulp_config');


// JAVASCRIPT PROCESSING
gulp.task('config', function() {
  gulp.src(config.app.config)
    .pipe(ngConstant({
      name: config.configName
    }))
    .pipe(gulp.dest(config.dist.js));
});

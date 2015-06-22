var gulp = require('gulp'),
  maven = require('gulp-maven-deploy'),
  config = require('../gulp_config');


gulp.task('maven-install', ['build'], function() {
  gulp.src('.')
    .pipe(maven.install({
      config: config.mavenConfig
    }));
});

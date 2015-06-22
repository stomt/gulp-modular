var gulp = require('gulp'),
  maven = require('gulp-maven-deploy'),
  config = require('../gulp_config');


gulp.task('maven-deploy', ['build'], function() {
  gulp.src('.')
    .pipe(maven.deploy({
      config: extend({}, config.mavenConfig, {repositories: config.mavenRepo})
    }));
});

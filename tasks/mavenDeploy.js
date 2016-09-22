'use strict';

var extend = require('extend'),
  maven = require('gulp-maven-deploy');

module.exports = function(gulp, config) {
  gulp.task('maven-deploy', ['build'], function() {
    gulp.src(config.mavenDeploy.src)
      .pipe(maven.deploy(extend({}, config.mavenDeploy.config, {repositories: config.mavenDeploy.repo})));
  });
};

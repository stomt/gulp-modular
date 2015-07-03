'use strict';

var maven = require('gulp-maven-deploy');


module.exports = function(gulp, config, repo) {
  gulp.task('maven-deploy', ['build'], function() {
    gulp.src('.')
      .pipe(maven.deploy({
        config: extend({}, config, {repositories: repo})
      }));
  });
};

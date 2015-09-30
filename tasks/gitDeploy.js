'use strict';

var ghPages = require('gulp-gh-pages'),
  gutil = require('gulp-util');

module.exports = function(gulp, config) {
  gulp.task('git-deploy', ['build'], function() {
    if (config.gitDeploy.branch) {
      return gulp.src(config.gitDeploy.src + '/**/*')
        .pipe(ghPages({
          branch: config.gitDeploy.branch
        }));
    } else {
      gutil.log('No deploy branch defined', gutil.colors.magenta('Did not deploy!'));
      return false;
    }
  });
};

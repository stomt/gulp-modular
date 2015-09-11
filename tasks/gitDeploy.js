'use strict';

var ghPages = require('gulp-gh-pages'),
  gutil = require('gulp-util');

module.exports = function(gulp, dist, deployBranch) {
  gulp.task('git-deploy', ['build'], function() {
    if (deployBranch) {
      return gulp.src(dist + '/**/*')
        .pipe(ghPages({
          branch: deployBranch
        }));
    } else {
      gutil.log('No deploy branch defined', gutil.colors.magenta('Did not deploy!'));
      return false;
    }
  });
};

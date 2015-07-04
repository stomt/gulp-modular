'use strict';

var ghPages = require('gulp-gh-pages');

module.exports = function(gulp, dist, deployBranch) {
  gulp.task('git-deploy', ['build'], function() {
    return gulp.src(dist + '/**/*')
      .pipe(ghPages({
        branch: deployBranch
      }));
  });
};

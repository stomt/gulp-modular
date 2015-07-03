'use strict';

var ngConstant = require('gulp-ng-constant');


module.exports = function(gulp, config, name, dest) {
  gulp.task('configScripts', function() {
    gulp.src(config)
      .pipe(ngConstant({
        name: name
      }))
      .pipe(gulp.dest(dest));
  });
};

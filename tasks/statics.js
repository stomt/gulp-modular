'use strict';

module.exports = function(gulp, config) {
  gulp.task('statics', function() {
    return gulp.src(config.statics.src)
      .pipe(gulp.dest(config.statics.dest));
  });
};

'use strict';


module.exports = function(gulp, src, dest) {
  gulp.task('statics', function() {
    return gulp.src(src)
      .pipe(gulp.dest(dest));
  });
};

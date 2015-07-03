'use strict';

var compass = require('gulp-compass');


module.exports = function(gulp, src, project, sass, css) {
  gulp.task('compass', function(done) {
    gulp.src(src)
      .pipe(compass({
        project: project,
        sass: sass,
        css: css,
        environment: 'production',
        sourcemap: true,
        debug: false,
        logging: false
      }));
    done();
  });
};

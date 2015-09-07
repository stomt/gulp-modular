'use strict';

var protractor = require('gulp-protractor').protractor,
  exit = require('gulp-exit');


module.exports = function(gulp, browserSync, src) {
  gulp.task('protractor', function(done) {
    gulp.src(['e2e/**/*.js'])
      .pipe(protractor({
        configFile: 'protractor.conf.js'
      })).on('error', function(e) {
        console.log(e);
        done();
      }).on('end', done);
  });

  gulp.task('e2e:singleRun', ['browserSync', 'protractor'], function() {
    gulp.src(src)
      .pipe(browserSync.exit());
    gulp.src(src)
      .pipe(exit());
  });

  gulp.task('e2e', function() {
    gulp.start(['e2e:singleRun']);
  });
};

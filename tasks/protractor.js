'use strict';

var connect = require('gulp-connect'),
  protractor = require('gulp-protractor').protractor,
  exit = require('gulp-exit');


module.exports = function(gulp, src) {
  gulp.task('protractor', function(done) {
    gulp.src(['e2e/**/*.js'])
      .pipe(protractor({
        configFile: 'protractor.conf.js'
      })).on('error', function(e) {
        console.log(e);
        done();
      }).on('end', done);
  });

  gulp.task('e2e:singleRun', ['connect', 'protractor'], function() {
    gulp.src(src)
      .pipe(connect.serverClose());
    gulp.src(src)
      .pipe(exit());
  });

  gulp.task('e2e', function() {
    gulp.start(['e2e:singleRun']);
  });
};

var gulp = require('gulp'),
  connect = require('gulp-connect'),
  protractor = require('gulp-protractor').protractor,
  exit = require('gulp-exit'),
  config = require('../gulp_config');


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
  gulp.src(config.bases.dist)
    .pipe(connect.serverClose());
  gulp.src(config.bases.dist)
    .pipe(exit());
});

gulp.task('e2e', function() {
  //port = config.testingPort;
  gulp.start(['e2e:singleRun']);
});

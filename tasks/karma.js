var gulp = require('gulp'),
  karma = require('karma').server,
  config = require('../gulp_config');


var configFile = config.dirname + '/karma.conf.js';
var browsers = ['PhantomJS', 'Firefox', 'Chrome'];

gulp.task('karma', function(done) {
  karma.start({
    configFile: configFile,
    singleRun: true
  }, function() {
    done();
  });
});

gulp.task('karma:watch', function(done) {
  karma.start({
    configFile: configFile,
    singleRun: false,
    autoWatch: true
  }, function() {
    done();
  });
});

gulp.task('karma:all', function(done) {
  karma.start({
    configFile: configFile,
    browsers: browsers,
    singleRun: true
  }, function() {
    done();
  });
});

gulp.task('test', function() {
  runSequence(['config', 'partials', 'vendorScripts'], 'karma');
});

gulp.task('test:all', function() {
  runSequence(['config', 'partials', 'vendorScripts'], 'karma:all');
});

gulp.task('test:watch', function() {
  runSequence(['config', 'partials', 'vendorScripts'], 'karma:watch');
});

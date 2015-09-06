'use strict';

var karma = require('karma').server,
  runSequence = require('run-sequence'),
  _ = require('underscore');


module.exports = function(gulp, tasks, config) {
  var configFile = config + '/karma.conf.js';
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

  var mergedTasks = _.intersection(tasks, ['config', 'partials', 'bowerScripts']);

  gulp.task('test', function() {
    runSequence(mergedTasks, 'karma');
  });

  gulp.task('test:all', function() {
    runSequence(mergedTasks, 'karma:all');
  });

  gulp.task('test:watch', function() {
    runSequence(mergedTasks, 'karma:watch');
  });
};

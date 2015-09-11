'use strict';

var _ = require('underscore');


module.exports = function(gulp, tasks) {
  // check usage of syncTasks
  var syncTasks = _.intersection(tasks, ['browserSync', 'watch']);

  // choose default task
  var defaultTask = [];
  if (syncTasks.length > 0) {
    defaultTask.push('serve');
  } else {
    defaultTask.push('build');
  }

  gulp.task('default', defaultTask);
};


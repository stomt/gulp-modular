'use strict';

var _ = require('underscore');

module.exports = function(gulp) {
  var tasks = _.intersection(_.keys(gulp.tasks), ['browserSync', 'watch']);

  // choose default task
  var defaultTask = [];
  if (tasks.length > 0) {
    defaultTask = ['serve'];
  } else {
    defaultTask = ['build'];
  }

  gulp.task('default', defaultTask);
};

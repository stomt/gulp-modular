'use strict';

var _ = require('underscore');


module.exports = function(gulp, tasks) {
  var mergedTasks = _.intersection(tasks, ['browserSync', 'watch']);
  gulp.task('serve', mergedTasks);
};


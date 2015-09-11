'use strict';

var _ = require('underscore');


module.exports = function(gulp, tasks) {
  var mergedTasks = _.intersection(tasks, ['index', 'images', 'statics']);
  gulp.task('build', mergedTasks);
};


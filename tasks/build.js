'use strict';

var _ = require('underscore');

module.exports = function(gulp) {
  var tasks = _.intersection(_.keys(gulp.tasks), ['index', 'images', 'statics']);
  gulp.task('build', tasks);
};


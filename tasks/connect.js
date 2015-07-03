'use strict';

var connect = require('gulp-connect'),
  history = require('connect-history-api-fallback');


module.exports = function(gulp, root, port) {
  gulp.task('connect', ['build'], function() {
    connect.server({
      root: [root],
      port: port,
      livereload: true,
      middleware: function() {
        return [history({})];
      }
    });
  });
};

'use strict';

var history = require('connect-history-api-fallback');

module.exports = function(gulp, browserSync, root, port) {
  gulp.task('browserSync', ['build'], function() {
    browserSync.init({
      server: {
        baseDir: root
      },
      port: port,
      middleware: [history()]
    });
  });
};

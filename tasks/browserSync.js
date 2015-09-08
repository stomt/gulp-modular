'use strict';

var history = require('connect-history-api-fallback');

module.exports = function(gulp, browserSync, root, port, proxy) {
  gulp.task('browserSync', ['build'], function() {
    if (proxy) {
      browserSync.init({
        proxy: proxy,
        port: port
      });
    } else {
      browserSync.init({
        server: {
          baseDir: root
        },
        port: port,
        middleware: [history()]
      });
    }
  });
};

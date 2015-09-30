'use strict';

var history = require('connect-history-api-fallback');

module.exports = function(gulp, config, browserSync) {
  gulp.task('browserSync', ['build'], function() {
    if (config.serve.proxy) {
      browserSync.init({
        proxy: config.serve.proxy,
        port: config.serve.port
      });
    } else {
      browserSync.init({
        server: {
          baseDir: config.serve.root
        },
        port: config.serve.port,
        middleware: [history()]
      });
    }
  });
};

var gulp = require('gulp'),
  connect = require('gulp-connect'),
  history = require('connect-history-api-fallback'),
  config = require('../gulp_config');


gulp.task('connect', ['build'], function() {
  connect.server({
    root: [config.bases.dist],
    port: config.port,
    livereload: true,
    middleware: function() {
      return [history({})];
    }
  });
});

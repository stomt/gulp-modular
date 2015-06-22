var gulp = require('gulp'),
  config = require('../gulp_config');


gulp.task('watch', ['build'], function() {
  gulp.watch(config.app.index, ['justIndex']);
  gulp.watch(config.app.views, ['partials']);
  gulp.watch(config.app.statics, ['statics']);
  gulp.watch(config.app.images, ['images']);
  gulp.watch(config.app.scssAll, ['compass']);
  gulp.watch(config.app.config, ['config']);
  gulp.watch(config.app.js, ['scripts']);
  // watch any change in dist folder; reload immediately in case of detected change
  gulp.watch(config.bases.dist + '**', ['reload']);
});

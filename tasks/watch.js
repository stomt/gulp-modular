'use strict';

module.exports = function(gulp, tasks, browserSync, config) {
  gulp.task('watch', ['build'], function() {
    gulp.watch(config.app.index, ['justIndex']);

    if (tasks.indexOf('partials')) {
      gulp.watch(config.app.views, ['scripts']);
    }

    if (tasks.indexOf('statics')) {
      gulp.watch(config.app.statics, ['statics']);
    }

    if (tasks.indexOf('images')) {
      gulp.watch(config.app.images, ['images']);
    }

    gulp.watch(config.app.scssAll, ['styles']);
    gulp.watch(config.app.js, ['scripts']);
    gulp.watch(config.bowerjson, ['bowerScripts', 'bowerStyles', 'bowerFonts']);
    // watch any change in dist folder; reload immediately in case of detected change
    // don't watch CSS assets, these will be handled in sass by CSS injections by browserSync.stream
    gulp.watch([config.bases.dist + '**', '!' + config.dist.css + '*', '!' + config.dist.fonts + '*'], browserSync.reload);
  });
};

'use strict';

var liveReload = require('gulp-livereload');

module.exports = function(gulp, tasks, config) {
  gulp.task('watch', ['build'], function() {
    liveReload.listen();
    gulp.watch(config.app.index, ['justIndex']);

    if (tasks.indexOf('partials')) {
      gulp.watch(config.app.views, ['partials']);
    }

    if (tasks.indexOf('partials')) {
      gulp.watch(config.app.statics, ['statics']);
    }

    if (tasks.indexOf('partials')) {
      gulp.watch(config.app.images, ['images']);
    }

    gulp.watch(config.app.scssAll, ['styles']);
    gulp.watch(config.app.js, ['scripts']);
    gulp.watch(config.bowerjson, ['vendorScripts', 'vendorStyles', 'vendorFonts']);
    // watch any change in dist folder; reload immediately in case of detected change
    gulp.watch(config.bases.dist + '**', ['reload']);
  });
};

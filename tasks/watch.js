'use strict';

var _ = require('underscore');

module.exports = function(gulp, config, browserSync) {
  gulp.task('watch', ['build'], function() {
    gulp.watch(config.build.index, ['justIndex']);

w

    if (config.statics) {
      gulp.watch(config.statics.src, ['statics']);
    }

    if (config.images) {
      gulp.watch(config.images.src, ['images']);
    }

    if (config.styles) {
      gulp.watch(config.styles.src, ['styles']);
    }

    var bowerTasks = _.intersection(_.keys(gulp.tasks), ['bowerScripts', 'bowerStyles', 'bowerFonts']);
    gulp.watch(config.build.bowerjson, bowerTasks);

    // watch any change in dist folder; reload immediately in case of detected change
    var watchGlob = [config.build.dest + '**'];

    // don't watch CSS assets, these will be handled in sass by CSS injections by browserSync.stream
    if (config.styles) {
      watchGlob.push('!' + config.styles.dest + '*');
    }
    if (config.fonts) {
      watchGlob.push('!' + config.fonts.dest + '*');
    }
    gulp.watch(watchGlob, browserSync.reload);
  });
};

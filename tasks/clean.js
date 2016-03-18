'use strict';

var del = require('del');

module.exports = function(gulp, config) {
  // remove build (erase dist folder and other generated assets recursively)
  gulp.task('clean', function() {
    return del(config.clean.dest);
  });
};

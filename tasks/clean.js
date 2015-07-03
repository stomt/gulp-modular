'use strict';

var del = require('del');


module.exports = function(gulp, glob) {
  // remove build (erase dist folder and other generated assets recursively)
  gulp.task('clean', function(done) {
    del([glob], done);
  });
};

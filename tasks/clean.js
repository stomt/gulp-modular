var gulp = require('gulp'),
  del = require('del'),
  config = require('../gulp_config');


// remove build (erase dist folder recursively)
gulp.task('clean', function(done) {
  del([config.bases.dist], done);
});

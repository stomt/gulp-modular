'use strict';

var bowerFiles = require('main-bower-files'),
  gulpif = require('gulp-if'),
  debug = require('gulp-debug');


var fontsFilter = {
  filter: /\.(otf|eot|svg|ttf|woff)/i
};

module.exports = function(gulp, debugFlag, dest) {
  gulp.task('fonts', ['bower:install', 'bower:prune'], function() {
    return gulp.src(bowerFiles(fontsFilter))
      .pipe(gulpif(debugFlag, debug()))
      .pipe(gulp.dest(dest));
  });
};


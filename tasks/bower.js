'use strict';

var bower = require('gulp-bower');


module.exports = function(gulp) {
  gulp.task('bower:prune', function() {
    return bower({cmd: 'prune'});
  });

  gulp.task('bower:install', function() {
    return bower();
  });
};

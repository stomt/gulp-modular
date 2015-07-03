'use strict';

var open = require('gulp-open');


module.exports = function(gulp, root, port) {
  var options = {
    url: 'http://localhost:' + port
  };

  gulp.task('open', ['index'], function() {
    gulp.src(root + 'index.html')
      .pipe(open('', options));
  });
};

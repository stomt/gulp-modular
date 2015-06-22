var gulp = require('gulp'),
  open = require('gulp-open'),
  config = require('../gulp_config');


var options = {
  url: 'http://localhost:' + config.port
};

gulp.task('open', ['index'], function() {
  gulp.src(config.dist + 'index.html')
    .pipe(open('', options));
});

var gulp = require('gulp'),
  bowerFiles = require('main-bower-files'),
  config = require('../gulp_config');


var fontsFilter = {
  filter: /\.(otf|eot|svg|ttf|woff)/i
};

gulp.task('fonts', ['bower:install', 'bower:prune'], function() {
  return gulp.src(bowerFiles(fontsFilter))
    .pipe(gulp.dest(config.dist.fonts));
});

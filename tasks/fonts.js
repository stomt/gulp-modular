var gulp = require('gulp'),
  bowerFiles = require('main-bower-files'),
  gulpif = require('gulp-if'),
  debug = require('gulp-debug'),
  config = require('../../gulp_config');


var fontsFilter = {
  filter: /\.(otf|eot|svg|ttf|woff)/i
};

gulp.task('fonts', ['bower:install', 'bower:prune'], function() {
  return gulp.src(bowerFiles(fontsFilter))
    .pipe(gulpif(config.debug, debug()))
    .pipe(gulp.dest(config.dist.fonts));
});

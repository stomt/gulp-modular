var gulp = require('gulp'),
  compass = require('gulp-compass'),
  config = require('../gulp_config');


gulp.task('compass', function(done) {
  gulp.src(config.app.scss)
    .pipe(compass({
      project: config.dirname,
      sass: config.bases.app,
      css: config.dist.css,
      environment: 'production',
      sourcemap: true,
      debug: false,
      logging: false
    }));
  done();
});

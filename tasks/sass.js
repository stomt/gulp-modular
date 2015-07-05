var sass = require('gulp-sass'),
  sourceMaps = require('gulp-sourcemaps'),
  autoPrefixer = require('gulp-autoprefixer');
  //gulpif = require('gulp-if'),
  //rev = require('gulp-rev'),
  //revReplace = require('gulp-rev-replace'),


module.exports = function(gulp, src, dest, sourceMapsPath) {
  gulp.task('styles', [], function (done) {
    var options = {
      outputStyle: 'compressed'
    };

    //var revOptions = {
    //  manifest: gulp.src('./' + config.dist.fonts + 'rev-manifest.json')
    //};

    gulp.src(src)
      .pipe(sourceMaps.init())
      .pipe(sass(options).on('error', sass.logError))
      .pipe(autoPrefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
      //.pipe(gulpif(config.rev, revReplace(revOptions)))
      //.pipe(gulpif(config.rev, rev()))
      .pipe(sourceMaps.write(sourceMapsPath))
      .pipe(gulp.dest(dest));
    done();
  });
};


var sass = require('gulp-sass'),
  sourceMaps = require('gulp-sourcemaps'),
  autoPrefixer = require('gulp-autoprefixer'),
  gulpif = require('gulp-if'),
  rev = require('gulp-rev'),
  revReplace = require('gulp-rev-replace');


module.exports = function(gulp, src, dest, revFlag, manifestPath, sourceMapsPath) {
  gulp.task('styles', ['fonts'], function (done) {
    var optionsSass = {
      outputStyle: 'compressed'
    };

    var optionsPrefixer = {
      browsers: ['last 2 versions'],
      cascade: false
    };

    var optionsRev = {
      manifest: gulp.src('./' + manifestPath + 'rev-manifest.json')
    };

    gulp.src(src)
      .pipe(sourceMaps.init())
      .pipe(sass(optionsSass).on('error', sass.logError))
      .pipe(autoPrefixer(optionsPrefixer))
      .pipe(gulpif(revFlag, revReplace(optionsRev)))
      .pipe(gulpif(revFlag, rev()))
      .pipe(sourceMaps.write(sourceMapsPath))
      .pipe(gulp.dest(dest));
    done();
  });
};


'use strict';

var minifyHtml = require('gulp-minify-html'),
  sourceMaps = require('gulp-sourcemaps'),
  ngHtml2Js = require('gulp-ng-html2js'),
  newer = require('gulp-newer'),
  concat = require('gulp-concat'),
  gulpif = require('gulp-if'),
  rev = require('gulp-rev'),
  uglify = require('gulp-uglify');


var partialsFile = 'partials.js';

module.exports = function(gulp, src, dest, moduleName, sourceMapsPath, revFlag) {
  gulp.task('partials', function() {
    return gulp.src(src)
      .pipe(sourceMaps.init())
      .pipe(minifyHtml({
        empty: true,
        spare: true,
        quotes: true
      }))
      .pipe(ngHtml2Js({
        moduleName: moduleName,
        prefix: 'components/'
      }))
      .pipe(newer(dest + partialsFile))
      .pipe(concat(partialsFile))
      .pipe(uglify())
      .pipe(gulpif(revFlag, rev()))
      .pipe(sourceMaps.write(sourceMapsPath))
      .pipe(gulp.dest(dest));
  });
};

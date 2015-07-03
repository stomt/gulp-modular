'use strict';

var minifyHtml = require('gulp-minify-html'),
  ngHtml2Js = require('gulp-ng-html2js'),
  newer = require('gulp-newer'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify');


var partialsFile = 'partials.js';

module.exports = function(gulp, src, dest, moduleName) {
  gulp.task('partials', function() {
    return gulp.src(src)
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
      .pipe(gulp.dest(dest));
  });
};

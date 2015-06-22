var gulp = require('gulp'),
  minifyHtml = require('gulp-minify-html'),
  ngHtml2Js = require('gulp-ng-html2js'),
  newer = require('gulp-newer'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  config = require('../gulp_config');


var partialsFile = 'partials.js';

gulp.task('partials', function() {
  return gulp.src(config.app.views)
    .pipe(minifyHtml({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe(ngHtml2Js({
      moduleName: config.templateName,
      prefix: 'components/'
    }))
    .pipe(newer(config.dist.js + partialsFile))
    .pipe(concat(partialsFile))
    .pipe(uglify())
    .pipe(gulp.dest(config.dist.js));
});

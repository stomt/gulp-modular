var gulp = require('gulp'),
  extend = require('extend'),
  gulpInject = require('gulp-inject'),
  preprocess = require('gulp-preprocess'),
  config = require('../gulp_config');


function injectIndex() {
  // don't read, just insert paths
  var srcOptions = {
    cwd: config.bases.dist,
    read: false
  };

  var jsFiles = ['js/vendor.js', 'js/config.js', 'js/partials.js', 'js/scripts.js'];

  // use relative paths with dist as base; remove the prepended '../dist' in the path
  var injectOptions = {
    relative: true,
    ignorePath: '../' + config.bases.dist
  };

  return gulp.src(config.app.index)
    .pipe(gulpInject(gulp.src(['css/vendor.css', 'css/style.css'], srcOptions), injectOptions))
    .pipe(gulpInject(gulp.src(jsFiles, srcOptions), extend({}, injectOptions)))
    .pipe(preprocess({
      context: {
        APP: config.appName
      }
    }))
    .pipe(gulp.dest(config.bases.dist));
}

gulp.task('justIndex', injectIndex);

// use this for building
gulp.task('index', ['compass', 'config', 'scripts', 'vendorScripts', 'vendorStyles'], injectIndex);

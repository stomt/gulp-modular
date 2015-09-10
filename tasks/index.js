'use strict';

var extend = require('extend'),
  gulpInject = require('gulp-inject'),
  minifyInline = require('gulp-minify-inline'),
  minifyHtml = require('gulp-minify-html'),
  preprocess = require('gulp-preprocess'),
  _ = require('underscore');

module.exports = function(gulp, tasks, dest, index, appName) {
  function injectIndex() {
    // don't read, just insert paths
    var srcOptions = {
      cwd: dest,
      read: false
    };

    var jsFiles = ['js/vendor*.js', 'js/scripts*.js'];
    var cssFiles = ['css/vendor*.css', 'css/style*.css'];

    // use relative paths with dist as base; remove the prepended '../dist' in the path
    var injectOptions = {
      relative: true,
      ignorePath: '../' + dest
    };

    return gulp.src(index)
      .pipe(gulpInject(gulp.src(cssFiles, srcOptions), injectOptions))
      .pipe(gulpInject(gulp.src(jsFiles, srcOptions), extend({}, injectOptions)))
      .pipe(preprocess({
        context: {
          APP: appName
        }
      }))
      .pipe(minifyInline())
      .pipe(minifyHtml({
        empty: true,
        spare: true,
        quotes: true
      }))
      .pipe(gulp.dest(dest));
  }

  // use this for watch
  gulp.task('justIndex', injectIndex);

  // use this initial building
  var mergedTasks = _.intersection(tasks, ['scripts', 'bowerScripts', 'styles', 'bowerStyles']);
  gulp.task('index', mergedTasks, injectIndex);
};

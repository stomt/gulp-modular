'use strict';

var extend = require('extend'),
  gulpInject = require('gulp-inject'),
  minifyInline = require('gulp-minify-inline'),
  minifyHtml = require('gulp-minify-html'),
  preprocess = require('gulp-preprocess'),
  _ = require('underscore');

module.exports = function(gulp, config) {
  function injectIndex() {
    // don't read, just insert paths
    var srcOptions = {
      cwd: config.build.dest,
      read: false
    };

    var jsFiles = ['js/vendor*.js', 'js/scripts*.js'];
    var cssFiles = ['css/vendor*.css', 'css/style*.css'];

    // use relative paths with dist as base; remove the prepended '../dist' in the path
    var injectOptions = {
      relative: true,
      ignorePath: '../' + config.build.dest
    };

    return gulp.src(config.index.src)
      .pipe(gulpInject(gulp.src(cssFiles, srcOptions), injectOptions))
      .pipe(gulpInject(gulp.src(jsFiles, srcOptions), extend({}, injectOptions)))
      .pipe(preprocess({
        context: config.index
      }))
      .pipe(minifyInline())
      .pipe(minifyHtml({
        empty: true,
        spare: true,
        quotes: true
      }))
      .pipe(gulp.dest(config.build.dest));
  }

  // use this for watch
  gulp.task('justIndex', injectIndex);

  // use this initial building
  var tasks = _.intersection(_.keys(gulp.tasks), ['scripts', 'bowerScripts', 'styles', 'bowerStyles']);
  gulp.task('index', tasks, injectIndex);
};

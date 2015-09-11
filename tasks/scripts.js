'use strict';

var sourceMaps = require('gulp-sourcemaps'),
  ngAnnotate = require('gulp-ng-annotate'),
  ngFilesort = require('gulp-angular-filesort'),
  ngConstant = require('gulp-ng-constant'),
  minifyHtml = require('gulp-minify-html'),
  ngHtml2Js = require('gulp-ng-html2js'),
  concat = require('gulp-concat'),
  gulpif = require('gulp-if'),
  rev = require('gulp-rev'),
  uglify = require('gulp-uglify'),
  plumber = require('gulp-plumber'),
  mergeStream = require('merge-stream');

var scriptsFile = 'scripts.js';

module.exports = function(gulp, tasks, config) {
  gulp.task('scripts', function() {

    var scripts = gulp.src(config.app.js);

    // optionally add configScripts
     if (tasks.indexOf('configScripts') !== -1) {
       var configScripts = ngConstant({
         constants: config.env.constants,
         name: config.configName,
         stream: true
       });

       scripts = mergeStream(scripts, configScripts);
     }


    // optionally add partials
    if (tasks.indexOf('partials') !== -1) {
      var partials = gulp.src(config.app.views)
        .pipe(minifyHtml({
          empty: true,
          spare: true,
          quotes: true
        }))
        .pipe(ngHtml2Js({
          moduleName: config.templateName,
          prefix: 'components/'
        }));

      scripts = mergeStream(scripts, partials);
    }

    return scripts
      .pipe(plumber())
      .pipe(sourceMaps.init())
      .pipe(ngAnnotate())
      .pipe(ngFilesort())
      .pipe(concat(scriptsFile))
      .pipe(gulpif(config.env.uglify, uglify()))
      .pipe(gulpif(config.env.rev, rev()))
      .pipe(sourceMaps.write(config.sourceMapsPath))
      .pipe(gulp.dest(config.dist.js));
  });
};


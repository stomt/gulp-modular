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
  iife = require('gulp-iife'),
  babel = require('gulp-babel'),
  preprocess = require('gulp-preprocess'),
  mergeStream = require('merge-stream');

var scriptsFile = 'scripts.js';

module.exports = function(gulp, config) {
  gulp.task('scripts', function() {

    var scripts = gulp.src(config.scripts.src)
      .pipe(gulpif(config.preprocess && config.preprocess.apply.scripts, preprocess(config.preprocess)));

    // optionally add configScripts
     if (config.scripts.ngConstant) {
       var configScripts = ngConstant({
         constants: config.scripts.ngConstant.constants,
         name: config.scripts.ngConstant.name,
         stream: true
       });

       scripts = mergeStream(scripts, configScripts);
     }


    // optionally add partials
    if (config.scripts.ng2html) {
      var partials = gulp.src(config.scripts.ng2html.src)
        .pipe(gulpif(config.preprocess && config.preprocess.apply.html, preprocess(config.preprocess)))
        .pipe(minifyHtml({
          empty: true,
          spare: true,
          quotes: true
        }))
        .pipe(ngHtml2Js({
          moduleName: config.scripts.ng2html.name,
          prefix: config.scripts.ng2html.prefix
        }));

      scripts = mergeStream(scripts, partials);
    }

    return scripts
      .pipe(plumber())
      .pipe(sourceMaps.init())
      .pipe(gulpif(config.build.babel, babel()))
      .pipe(gulpif(!config.build.babel, iife()))
      .pipe(ngAnnotate())
      .pipe(ngFilesort())
      .pipe(concat(scriptsFile))
      .pipe(gulpif(config.build.uglify, uglify()))
      .pipe(gulpif(config.build.rev, rev()))
      .pipe(sourceMaps.write(config.build.sourceMapPath))
      .pipe(gulp.dest(config.scripts.dest))
      .pipe(gulpif(config.build.rev, rev.manifest({cwd: config.scripts.dest, merge: true})))
      .pipe(gulpif(config.build.rev, gulp.dest(config.scripts.dest)));
  });
};


'use strict';

var sass = require('gulp-sass'),
  sourceMaps = require('gulp-sourcemaps'),
  autoPrefixer = require('gulp-autoprefixer'),
  gulpif = require('gulp-if'),
  rev = require('gulp-rev'),
  revReplace = require('gulp-rev-replace'),
  nodeSassGlobbing = require('node-sass-globbing'),
  _ = require('underscore');


module.exports = function(gulp, tasks, browserSync, src, dest, revFlag, manifestPath, sourceMapsPath) {
  var mergedTasks = _.intersection(tasks, ['fonts']);
  gulp.task('styles', mergedTasks, function () {
    var optionsSass = {
      outputStyle: 'compressed',
      importer: nodeSassGlobbing
    };

    var optionsPrefixer = {
      browsers: ['last 2 versions'],
      cascade: false
    };

    var optionsRev = {
      manifest: gulp.src('./' + manifestPath + 'rev-manifest.json')
    };

    return gulp.src(src)
      .pipe(sourceMaps.init())
      .pipe(sass(optionsSass).on('error', sass.logError))
      .pipe(autoPrefixer(optionsPrefixer))
      .pipe(gulpif(revFlag, revReplace(optionsRev)))
      .pipe(gulpif(revFlag, rev()))
      .pipe(sourceMaps.write(sourceMapsPath))
      .pipe(gulp.dest(dest))
      .pipe(browserSync.stream({match: '**/*.css'}));
  });
};

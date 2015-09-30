'use strict';

var sass = require('gulp-sass'),
  sourceMaps = require('gulp-sourcemaps'),
  autoPrefixer = require('gulp-autoprefixer'),
  gulpif = require('gulp-if'),
  rev = require('gulp-rev'),
  revReplace = require('gulp-rev-replace'),
  nodeSassGlobbing = require('node-sass-globbing'),
  _ = require('underscore');

module.exports = function(gulp, config, browserSync) {
  var tasks = _.intersection(_.keys(gulp.tasks), ['fonts']);
  gulp.task('styles', tasks, function (done) {
    var optionsSass = {
      outputStyle: 'compressed',
      importer: nodeSassGlobbing
    };

    var optionsPrefixer = {
      browsers: ['last 2 versions'],
      cascade: false
    };

    var optionsRev = {
      manifest: gulp.src('./' + config.fonts.dest + 'rev-manifest.json')
    };

    gulp.src(config.styles.src)
      .pipe(sourceMaps.init())
      .pipe(sass(optionsSass).on('error', sass.logError))
      .pipe(autoPrefixer(optionsPrefixer))
      .pipe(gulpif(config.build.rev, revReplace(optionsRev)))
      .pipe(gulpif(config.build.rev, rev()))
      .pipe(sourceMaps.write(config.build.sourceMapPath))
      .pipe(gulp.dest(config.styles.dest))
      .pipe(browserSync.stream({match: '**/*.css'}));
    done();
  });
};

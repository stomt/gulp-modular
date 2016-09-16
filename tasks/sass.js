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
  gulp.task('styles', tasks, function () {
    var optionsSass = {
      outputStyle: 'compressed',
      importer: nodeSassGlobbing
    };

    if (config.build.rev && config.fonts) {
      var optionsRev = {
        manifest: gulp.src('./' + config.fonts.dest + 'rev-manifest.json')
      };
    }

    return gulp.src(config.styles.src)
      .pipe(sourceMaps.init())
      .pipe(sass(optionsSass).on('error', sass.logError))
      .pipe(autoPrefixer(config.styles.prefixer))
      .pipe(gulpif(config.build.rev && config.fonts, revReplace(optionsRev)))
      .pipe(gulpif(config.build.rev, rev()))
      .pipe(sourceMaps.write(config.build.sourceMapPath))
      .pipe(gulp.dest(config.styles.dest))
      .pipe(browserSync.stream({match: '**/*.css'}))
      .pipe(gulpif(config.build.rev, rev.manifest({cwd: config.statics.dest, merge: true})))
      .pipe(gulpif(config.build.rev, gulp.dest(config.statics.dest)));
  });
};

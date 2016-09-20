'use strict';

var markdown = require('gulp-markdown');
var frontMatter = require('gulp-front-matter');
var layout = require('gulp-layout');

var path = require('path');
var read = require('fs-readdir-recursive');

var cwd = process.cwd();

/**
 * Helper for reading a folder with partials, returns a `partials` object that
 * can be consumed by consolidate.
 *
 * @param {String} partialsPath
 * @param {String} layoutsPath
 * @param {String} sourcePath
 * @return {Object}
 */
function readPartials(partialsPath, layoutsPath, sourcePath) {
  var partialsAbs = path.isAbsolute(partialsPath) ? partialsPath : path.join(sourcePath, partialsPath);
  var layoutsAbs = path.isAbsolute(layoutsPath) ? layoutsPath : path.join(sourcePath, layoutsPath);
  var files = read(partialsAbs);
  var partials = {};

  // Return early if there are no partials
  if (files.length === 0) {
    return partials;
  }

  // Read and process all partials
  for (var i = 0; i < files.length; i++) {
    var fileInfo = path.parse(files[i]);
    var name = path.join(fileInfo.dir, fileInfo.name);
    var partialAbs = path.join(partialsAbs, name);
    var partialPath = path.relative(layoutsAbs, partialAbs);

    var partialKey = name.replace(/\\/g, '/');
    partials[partialKey] = partialPath;
  }

  return partials;
}

module.exports = function (gulp, config) {
  gulp.task('markdown', function () {
    var partials = readPartials(config.markdown.layout.partials, config.markdown.layout.src, cwd);

    return gulp.src(config.markdown.src)
      .pipe(frontMatter())
      .pipe(markdown())
      .pipe(layout(function (file) {
        var base_options = Object.assign({}, config.markdown.layout);
        var base_and_frontmatter_options = Object.assign(base_options, file.frontMatter);
        base_and_frontmatter_options.partials = Object.assign({}, partials);

        if (file.frontMatter.layout) {
          base_and_frontmatter_options.layout = path.join(base_options.src, file.frontMatter.layout);
        } else {
          base_and_frontmatter_options.layout = path.join(base_options.src, base_options.layout);
        }
        return base_and_frontmatter_options
      }))
      .pipe(gulp.dest(config.markdown.dest))
  });
};

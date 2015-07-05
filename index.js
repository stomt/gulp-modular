'use strict';


module.exports = function(gulp, tasks, config) {

  if (tasks.indexOf('bower') !== -1) {
    require('./tasks/bower')(gulp);
  }

  if (tasks.indexOf('clean') !== -1) {
    require('./tasks/clean')(gulp, config.bases.dist);
  }

  if (tasks.indexOf('compass') !== -1) {
    require('./tasks/compass')(gulp, config.app.scss, config.dirname, config.bases.app, config.dist.css);
  }

  if (tasks.indexOf('configScripts') !== -1) {
    require('./tasks/configScripts')(gulp, config.app.config, config.configName, config.dist.js);
  }

  if (tasks.indexOf('connect') !== -1) {
    require('./tasks/connect')(gulp, config.bases.dist, config.port);
  }

  if (tasks.indexOf('fonts') !== -1) {
    require('./tasks/fonts')(gulp, config.app.fonts, config.dist.fonts);
  }

  if (tasks.indexOf('gitDeploy') !== -1) {
    require('./tasks/gitDeploy')(gulp, config.bases.dist, config.deployBranch);
  }

  if (tasks.indexOf('images') !== -1) {
    require('./tasks/images')(gulp, config.app.images, config.dist.images);
  }

  if (tasks.indexOf('index') !== -1) {
    require('./tasks/index')(gulp, config.bases.dist, config.app.index, config.appName);
  }

  if (tasks.indexOf('jshint') !== -1) {
    require('./tasks/jshint')(gulp, config.app.alljs);
  }

  if (tasks.indexOf('karma') !== -1) {
    require('./tasks/karma')(gulp, config.dirname);
  }

  if (tasks.indexOf('mavenDeploy') !== -1) {
    require('./tasks/mavenDeploy')(gulp, config.mavenConfig, config.mavenRepo);
  }

  if (tasks.indexOf('mavenInstall') !== -1) {
    require('./tasks/mavenInstall')(gulp, config.mavenConfig);
  }

  if (tasks.indexOf('open') !== -1) {
    require('./tasks/open')(gulp, config.dist, config.port);
  }

  if (tasks.indexOf('partials') !== -1) {
    require('./tasks/partials')(gulp, config.app.views, config.dist.js, config.templateName, config.sourceMapsPath);
  }

  if (tasks.indexOf('protractor') !== -1) {
    require('./tasks/protractor')(gulp, config.bases.dist);
  }

  if (tasks.indexOf('protractor') !== -1) {
    require('./tasks/protractor')(gulp, config.bases.dist);
  }

  if (tasks.indexOf('reload') !== -1) {
    require('./tasks/reload')(gulp, config.bases.dist);
  }

  if (tasks.indexOf('sass') !== -1) {
    require('./tasks/sass')(gulp, config.app.scss, config.dist.css, config.production, config.sourceMapsPath);
  }

  if (tasks.indexOf('scripts') !== -1) {
    require('./tasks/scripts')(gulp, config.app.js, config.dist.js, config.sourceMapsPath);
  }

  if (tasks.indexOf('statics') !== -1) {
    require('./tasks/statics')(gulp, config.app.statics, config.bases.dist);
  }

  if (tasks.indexOf('vendorFonts') !== -1) {
    require('./tasks/vendorFonts')(gulp, config.debug, config.dist.fonts);
  }

  if (tasks.indexOf('vendorScripts') !== -1) {
    require('./tasks/vendorScripts')(gulp, config.dist.js, config.sourcemapPath, config.production, config.debug);
  }

  if (tasks.indexOf('vendorStyles') !== -1) {
    require('./tasks/vendorStyles')(gulp, config.dist.css, config.sourceMapsPath, config.debug);
  }

  if (tasks.indexOf('watch') !== -1) {
    require('./tasks/watch')(gulp, config);
  }

};

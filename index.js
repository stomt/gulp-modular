'use strict';

var browserSync = require('browser-sync').create(),
  defaultConfig = require('./defaultConfiguration'),
  _ = require('underscore');

module.exports = function(gulp, userConfig) {

  var configKeys = _.keys(userConfig);

  // initialize config with the single mandatory build property
  var config = {
    build: defaultConfig.build
  };

  configKeys.map(function(configKey) {
    if (defaultConfig[configKey]) {
      config[configKey] = _.assign(defaultConfig[configKey], userConfig[configKey]);
    }
  });

  if (config.bower) {
    require('./tasks/bower')(gulp);
  }

  if (config.clean) {
    require('./tasks/clean')(gulp, config);
  }

  if (config.fonts) {
    require('./tasks/fonts')(gulp, config);
  }

  if (config.gitDeploy) {
    require('./tasks/gitDeploy')(gulp, config);
  }

  if (config.images) {
    require('./tasks/images')(gulp, config);
  }

  if (config.jshint) {
    require('./tasks/jshint')(gulp, config);
  }

  if (config.mavenDeploy) {
    require('./tasks/mavenDeploy')(gulp, config);
  }

  if (config.mavenInstall) {
    require('./tasks/mavenInstall')(gulp, config);
  }

  if (config.styles) {
    require('./tasks/sass')(gulp, config, browserSync);
  }

  if (config.scripts) {
    require('./tasks/scripts')(gulp, config);
  }

  if (config.statics) {
    require('./tasks/statics')(gulp, config);
  }

  if (config.bowerFonts) {
    require('./tasks/bowerFonts')(gulp, config);
  }

  if (config.bowerScripts) {
    require('./tasks/bowerScripts')(gulp, config);
  }

  if (config.bowerStyles) {
    require('./tasks/bowerStyles')(gulp, config);
  }

  if (config.serve) {
    require('./tasks/browserSync')(gulp, config, browserSync);
    require('./tasks/watch')(gulp, config, browserSync);
  }

  // mandatory tasks
  require('./tasks/index')(gulp, config);
  require('./tasks/build')(gulp, config);
  require('./tasks/serve')(gulp, config);
  require('./tasks/default')(gulp, config);

};

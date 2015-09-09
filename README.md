# gulp-modular
Boilerplate gulp tasks for quick project setup.

# Setup
 1. `npm install gulp gulp-modular`
 2. Create `gulpfile.js` (cf. [graFiddle gulpfile.js](https://github.com/GraFiddle/grafiddle/blob/develop/gulpfile.js)), require both modules and define tasks and configuration:

```javascript
var gulp = require('gulp');
var modular = require('gulp-modular');

var tasks = ['bower', 'clean', 'sass', 'configScripts', 'browserSync', 'fonts', ...];
var config = {...};

modular(gulp, tasks, config);
```

Detailed documentation of our best practice workflow and the config object will be added soon.

# Tasks

## General
 - `bower:install` to install packages defined in the `bower.json`.
 - `bower:prune` to remove packages that are not used anymore.
 - `images` collects graphics of different filetypes, flattens the paths and places them in a particular distribution folder.
 - `index` injects the transpiled JavaScript and CSS into the `index.html`.
 - `jshint` runs jshint linting tool.
 - `clean` removes the distribution folder with all its content.
 - `statics` copies static files to a particular distribution folder.
 - `fonts` copies local fonts to a particular distribution folder.
 - `bowerFonts` copies fonts defined in the bower dependencies to a particular distribution folder.

## Stylesheets
 - `styles` to include your style files, choose one of the following two as your scss compiler:
 - `compass` compiles scss files to CSS files using [compass](https://github.com/Compass/compass).
 - `sass` compiles scss files to CSS using [gulp-sass](https://github.com/dlmanning/gulp-sass).
 - `bowerStyles` concats all styles from the bower dependencies and stores the file to a particular distribution folder.

## AngularJS & JavaScript
 - `configScripts` creates a dedicated Angular module to provide a environment specific app configuration.
 - `karma` runs the karma test runner.
 - `protractor` runs protractor end-to-end tests.
 - `partials` collects all partials and combines them in a Angular module.
 - `scripts` connect all scripts, annotates, orders, concats and stores a the result to a file in a particular distribution folder.
 - `bowerScripts` concats all scripts from the bower dependencies and stores the file to a particular distribution folder.

## Local Server
 - `browserSync` provides a small HTTP server for local testing. It serves the requested file if available, the `index.html` otherwise (to support Angular HTML5 mode). It opens the default browser when the server has started.
 - `watch` checks files for changes and triggers the reload (see above).

## Deploy
 - `mavenDeploy` creates a maven package and uploads it to a custom repository.
 - `mavenInstall` creates a snapshot maven package and installs it on the local machine.
 - `gitDeploy` saves the compiled files in a specified git branch and pushes this branch.

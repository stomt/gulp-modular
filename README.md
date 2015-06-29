# gulp-modular
Boilerplate gulp tasks for quick project setup.

# Setup
 1. Go to your project root
 2. `git submodule add https://github.com/ONE-LOGIC/gulp-modular/`
 3. Create `gulpfile.js` and `require()` tasks from `gulp-modular/tasks/` (cf. [graFiddle gulpfile.js](https://github.com/GraFiddle/grafiddle/blob/develop/gulpfile.js)). Optionally add composite tasks to the file.
 4. Create `gulp_config.js` and define globs and flags required by the gulp-modular tasks (cf. [graFiddle gulp_config.js](https://github.com/GraFiddle/grafiddle/blob/develop/gulp_config.js)).

# Tasks

## General
 - `bower:install` to install packages defined in the `bower.json`.
 - `bower:prune` to remove packages that are not used anymore.
 - `fonts` copies fonts defined in the bower dependencies to a particular distribution folder.
 - `images` collects graphics of different filetypes, flattens the paths and places them in a particular distribution folder.
 - `ìndex` injects the transpiled JavaScript and CSS into the `index.html`.
 - `jshint` runs jshint linting tool.
 - `clean` removes the distribution folder with all its content.
 - `statics` copies static files to a particular distribution folder.

## Stylesheets
 - `compass` compiles scss files to CSS files.
 - `vendorStyles` concats all styles from the bower dependencies and stores the file to a particular distribution folder.

## AngularJS & JavaScript
 - `configScripts` creates a dedicated Angular module to provide a environment specific appp configuration.
 - `karma` runs the karma test runner.
 - `protractor` runs protractor end-to-end tests.
 - `partials` collects all partials and combines them in a Angular module.
 - `scripts` connect all scripts, annotates, orders, concats and stores a the result to a file in a particular distribution folder.
 - `vendorScripts` concats all scripts from the bower dependencies and stores the file to a particular distribution folder.

## Local Server
 - `connect` provides a small HTTP server for local testing. It serves the requested file if available, the `index.html` otherwise (to support Angular HTML5 mode)
 - `open` opens up the default web browser after the local HTTP server has started.
 - `reload` is responsible to reload the current page in the web browser whenever distribution files have changed.
 - `watch` checks files for changes and triggers the reload (see above).

## Deploy
 - `mavenDeploy` creates a maven package and uploads it to a custom repository.
 - `mavenInstall` creates a snapshot maven package and installs it on the local machine.

# Documentation

Copy `sample-gulpfile.js` from the gulp-modular root to your project and rename it to `gulpfile.js`. 
Open the file and customize the tasks to match your specific project requirements. The file consists mostly of comments. 

* Uncomment top level config properties (like `scripts`, `styles` or `clean`) to register new gulp tasks.
* Uncomment deeper level config properties to customize task specific options. 
  The default values are set automatically. Just uncomment if you want to change these. 
* Add your own gulp tasks as you did before using gulp-modular. You can even decorate or replace existing gulp tasks by accessing `gulp.tasks` after calling `gulp-modular(gulp, config)`


## gulp-modular tasks

* [General](#general)
    * [build](#build)
    * [index](#index)
    * [clean](#clean)
* [Dependencies](#dependencies)
    * [bower](#bower)
    * [bowerFonts](#bowerfonts)
    * [bowerScripts](#bowerscripts)
    * [bowerStyles](#bowerstyles)
* [User Space](#user-space)
    * [statics](#statics)
    * [images](#images)
    * [fonts](#fonts)
    * [scripts](#scripts)
    * [styles](#styles)
* [Serving](#serving)
    * [serve](#serve)
* [Deployment](#deployment)
    * [gitDeploy](#gitdeploy)
    * [mavenInstall](#maveninstall)
    * [mavenDeploy](#mavendeploy)
* [Testing](#testing)
    * [jshint](#jshint)

## General

### build
Required task in the configuration. It holds some global options. 
Registers the tasks `index`, `build`, `serve` and `default`.
Executes the tasks (if activated): `index`, `images`, `statics`

* **dest** `='dist/'` path to the distribution folder
* **babel** `=false` uses babel to transpile ES6/ES2015 to ES5, you have to [add a preset](http://babeljs.io/docs/setup/#gulp) 
* **uglify** `=true` uglyfies and compresses generated script files
* **sourceMapPath** `='.'` relative path to place sourcemaps
* **rev** `=false` append content hash to generated script and stylesheet files
* **bowerDebug** `=false` prints gulp pipes from included bower files
* **bowerjson** `='bower.json'` path to the `bower.json` file, enables rebuild and reload when dependencies change 
* **cdn** `=''` path to cdn host of static files, files injected to index will be prefixed with it
* **index** `='app/index.html'` path to the root html file
* **transformCSS** `= undefined` [callback](https://github.com/klei/gulp-inject#injecting-with-custom-transform-function-with-default-fallback) to transform filename of CSS files
* **transformJS** `= undefined` [callback](https://github.com/klei/gulp-inject#injecting-with-custom-transform-function-with-default-fallback) to transform filename of JS files

### preprocess
Optional task in the configuration. It defines where to apply the preprocessor.

* **apply** `={}` file types which should be preprocessed
    * **index** `=true` the index file
    * **html** `=false` all html templates
    * **scripts** `=false` all JavaScript files
    * **styles** `=false` all scss files
* **context** `={}` values which can be used by the preprocessor
    * **APP** `='app'` angular app name via preprocessor by using `<!-- @echo NAME -->` in your `index.html`
    * **BASE** `='/'` base tag for html5mode  via preprocessor by using `<!-- @echo BASE -->` in your `index.html`

### clean
Optional task that enables deletion of all build artifacts.

* **dest** `='dist/'` glob pointing to all build artifacts

## Dependencies

### bower
Optional property that registers tasks `bower:install` and `bower:prune` for package management by bower. 
Just add property `bower` to the configuration. This property has no options.

### bowerFonts
Optional task bowerFonts collects fonts from bower dependencies and stores them in a dedicated distribution folder.

* **dest** `='dist/fonts/'` destination folder of the font files

### bowerScripts
Optional task bowerScripts collects scripts from bower dependencies stores them in a dedicated distribution folder.

* **dest** `='dist/js/'` destination of the concat file `vendor.js` (and associated sourcemaps file)

### bowerStyles
Optional task bowerStyles collects styles from bower dependencies and stores them in a dedicated distribution folder

* **dest** `='dist/css/'` destination of the concat file `vendor.css` (and associated sourcemaps file)

## User Space

### statics
Optional task statics collects static files and stores them in a dedicated distribution folder.

* **src** `=['app/.htaccess', 'app/favicon.ico', 'app/robots.txt']` glob that points to all static files
* **dest** `='dist/'` destination of the static files

### images
Optional task images collects, flattens and minifies graphics before storing them in a dedicated distribution folder.

* **src** `='app/components/**/*.{png,jpg,jpeg,gif,svg,ico}'` glob that points to all images 
* **dest** `='dist/images/'` destination of the image files

### fonts
Optional task fonts collects specified fonts and stores them in a dedicated distribution folder.

* **src** `='app/fonts/**/*.{otf,eot,svg,ttf,woff,woff2}'` glob that points to all fonts
* **dest** `='dist/fonts/'` destination of the font files

### scripts
Optional task scripts collects scripts, runs several transformations, concatenates everything and stores them in a dedicated distribution folder.

* **src** `=['app/components/**/*.js', '!app/components/**/*.spec.js']` glob that points to all scripts (except tests)
* **dest** `='dist/js/'` destination of the concat file `scripts.js` (and associated sourcemaps file)
* **ng2html** `={}` adds ng2html and saves all html partials right into the AngularJS `$templateCache
    * **src** `='app/components/**/*.html'` glob that points to all partials
    * **prefix** `='components/'` prefix of the URL path
    * **name** `='app.templates'` the module name that contains the partials
* **ngConstant** `={}` adds ngConstant to dynamically add variables to your AngularJS app
    * **name** `='app.config'` the module name that contains the variables
    * **ngConstant** `={}` the object that contains the constants

### styles
Optional task styles collects styles (.scss), runs several transformations, concatenates everything and stores them in a dedicated distribution folder.

* **src** `='app/style.scss'` root SCSS file (imports are inside)
* **files** `='app/**/*.scss'` all SCSS files that have to be watched for changes
* **dest** `='dist/css/'` destination of the concat file `style.css` (and associated sourcemaps file)
* **prefixer** `={}` all [autoprefixer options](https://github.com/postcss/autoprefixer#options) can be set here
    * **browsers** `=['last 2 versions']` list of browsers, which are supported in your project
    * **cascade** `=false` should Autoprefixer use Visual Cascade

## Serving

### serve
Optional property serve registers tasks `browserSync` to serve the app and `watch` to reload the app on detected file changes. 

* **root** `='dist/'` the root of the local server
* **port** `=3000` the port of the local server
* **proxy** `=undefined` host of locally served app that should be proxied to allow livereload
* **watch** `=true` deactivates watches and automatic browser reloading

## Deployment

### gitDeploy
Optional task gitDeploy deploys to a specific branch in your git repository
  
* **src** `='dist/'` the local root of the deploy repo
* **branch** '=undefined` specifies git repository branch to deploy to

### mavenInstall
Optional task mavenInstall allows to install maven packages locally.

* **src** `='.'` root of the maven package
* **config** `={}` the maven package config

### mavenDeploy
Optional task mavenDeploy allows to add maven packages to a remote server.

* **src** `='.'` root of the maven package
* **config** `={}` the maven package config
* **repo** `={}` the remove maven package repository

## Testing

### jshint
Optional task jshint lints code with respect to your `.jshintrc` files.

* **src** `='app/components/**/*.js'` glob specifying what to lint
* **reporter** `=''` additional reporter e.g. to fail on warnings

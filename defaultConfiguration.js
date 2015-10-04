module.exports = {
  build: {
    context: {
      APP: 'app',
      BASE: '/'
    },
    index: 'app/index.html',
    dest: 'dist/',
    bowerjson: 'bower.json',
    uglify: true,
    rev: false,
    bowerDebug: false,
    sourceMapPath: '.'
  },
  clean: {
    dest: 'dist/'
  },
  bower: null,
  bowerFonts: {
    dest: 'dist/fonts/'
  },
  bowerScripts: {
    dest: 'dist/js/'
  },
  bowerStyles: {
    dest: 'dist/css/'
  },
  statics: {
    src: ['app/.htaccess', 'app/favicon.ico', 'app/robots.txt'],
    dest: 'dist/'
  },
  images: {
    src: 'app/components/**/*.{png,jpg,jpeg,gif,svg,ico}',
    dest: 'dist/images/'
  },
  fonts: {
    src: 'app/fonts/**/*.{otf,eot,svg,ttf,woff}',
    dest: 'dist/fonts/'
  },
  scripts: {
    src: ['app/components/**/*.js', '!app/components/**/*.spec.js'],
    dest: 'dist/js/',
    ng2html: {
      src: 'app/components/**/*.html',
      prefix: 'components/',
      name: 'app.templates'
    },
    ngConstant: {
      constants: {},
      name: 'app.config'
    }
  },
  styles: {
    src: 'app/style.scss',
    dest: 'dist/css/'
  },
  serve: {
    root: 'dist/',
    port: 3000,
    proxy: undefined,
    watch: true
  },
  gitDeploy: {
    src: 'dist/',
    branch: undefined
  },
  mavenInstall: {
    src: '.',
    config: {}
  },
  mavenDeploy: {
    src: '.',
    config: {},
    repo: {}
  },
  jshint: {
    src: 'app/components/**/*.js'
  }
};

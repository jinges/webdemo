var gulp = require('gulp'),
  concat = require('gulp-concat'),
  contentIncluder = require('gulp-content-includer'),
  minifyHtml = require('gulp-minify-html'),
  minifyCss = require('gulp-minify-css'),
  uglify = require('gulp-uglify'),
  connect = require('gulp-connect'),
  jshint = require('gulp-jshint'),
  imagemin = require('gulp-imagemin'),
  rename = require('gulp-rename'),
  sass = require('gulp-sass'),
  livereload = require('gulp-livereload'),
  del = require('del'),
  fs = require('fs'),
  opn = require('opn'),
  assetRev = require('gulp-asset-rev');

var paths = {};


function logError(err) {
  console.log(err.toString());
  this.emit('end');
}

var validateResources = function (resources) {
  resources.forEach(function (resource) {
    if (!resource.match(/\*/) && !fs.existsSync(resource)) {
      throw resource + "not found !";
    }
  });
}

gulp.task('clean', function (cb) {
  del('dist', cb);
});

gulp.task('concat', function () {
  gulp.src(paths.origin.page)
    .pipe(contentIncluder({
      includerReg: /<!\-\-include\s+"([^"]+)"\-\->/g,
      deepConcat: true,
      baseSrc: './'
    }))
    // .pipe(assetRev())
    // .pipe(rename('index.html'))
    .pipe(minifyHtml())
    .pipe(gulp.dest(paths.tmp_root + '/'))
    .pipe(livereload());
});

gulp.task('sass', function () {
  console.log('run build sass files!')
  return gulp.src(paths.origin.styles)
    .pipe(sass())
    .pipe(concat('app.css'))
    .pipe(minifyCss())
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(gulp.dest(paths.tmp_root + '/assets/css'))
    .pipe(livereload());
});

gulp.task('script', function () {
  return gulp.src(paths.origin.scripts)
    .pipe(concat('app.js'))
    .pipe(gulp.dest(paths.tmp_root + '/assets/js'))
    .pipe(assetRev())
    .pipe(uglify())
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(gulp.dest(paths.tmp_root + '/assets/js'))
    .pipe(livereload());
});

gulp.task('scriptFile', function () {
  return gulp.src(paths.origin.script)
    .pipe(gulp.dest(paths.tmp_root + '/assets/js'))
    .pipe(livereload());
})

gulp.task('images', function () {
  return gulp.src(paths.origin.images)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.tmp_root + '/assets/img'))
    .pipe(livereload());
});


gulp.task('connect', ['concat', 'sass', 'images', 'scriptFile'], function () {
  connect.server({
    livereload: true,
    root: paths.tmp_root,
    port: 80
  });

  livereload.listen();
})

gulp.task('watch', function () {
  gulp.watch(paths.origin.page, ['concat']);
  gulp.watch(paths.origin.styles, ['sass']);
  // gulp.watch(paths.origin.scripts, ['script']);
  gulp.watch(paths.origin.script, ['scriptFile']);
  livereload.listen();
});

gulp.task('web-config', function () {
  var webPath = require('./config/web-path.js');
  paths = webPath;
})

gulp.task('default', ['web-config', 'connect', 'watch'], function () {
  opn('http://localhost:80');
})

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

gulp.task('transScript', function () {
  return gulp.src(paths.origin.scripts)
    .pipe(gulp.dest(paths.tmp_root + '/'))
    .pipe(livereload());
})
gulp.task('transComponent', function () {
  return gulp.src(paths.origin.components)
    .pipe(uglify())
    .pipe(gulp.dest(paths.tmp_root + '/components'))
    .pipe(livereload());
})


gulp.task('images', function () {
  return gulp.src(paths.origin.images)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.tmp_root + '/assets/img'))
    .pipe(livereload());
});


gulp.task('connect', ['concat', 'sass', 'images', 'transScript', 'transComponent'], function () {
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
  gulp.watch(paths.origin.scripts, ['transScript']);
  gulp.watch(paths.origin.components, ['transComponent']);
  livereload.listen();
});

gulp.task('web-config', function () {
  var webPath = require('./config/web-path.js');
  paths = webPath;
})

gulp.task('default', ['web-config', 'connect', 'watch'], function () {
  opn('http://localhost:80');
})

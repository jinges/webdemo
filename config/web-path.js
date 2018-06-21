var root = 'src';
var pcpaths = {
  origin: {
    root: root,
    page: root + '/**/*.html',
    images: root + '/assets/img/**/*.*',
    styles: [
      root + '/assets/sass/*.scss',
      root + '/assets/sass/!_*.scss',
      root + '/assets/css/*.css'
    ],
    scripts: [
      root + '/**/*.js',
      '!src/components/**/*.js'
    ],
    components: [
      root + '/components/**/*.js'
    ]
  },
  tmp_root: 'dist'
}

module.exports = pcpaths;
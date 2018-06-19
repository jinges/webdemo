var root = 'src';
var pcpaths = {
    origin:{
        root: root,
        page: root+'/*.html',
        images: root+'/assets/img/**/*.*',
        styles: [
            root+'/assets/sass/*.scss',
            root+'/assets/sass/!_*.scss',
            root+'/assets/css/*.css'
            ],
        script: [
            root+'/assets/js/**/*'
        ],
        scripts: [
            root + '/assets/js/*',
            root + '/assets/js/common/*',
        ]
    },
    tmp_root: 'dist'
}

module.exports = pcpaths;
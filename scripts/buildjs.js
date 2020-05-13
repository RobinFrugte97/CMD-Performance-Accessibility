const gulp = require('gulp')
const concat = require('gulp-concat')
const minify = require('gulp-minify')

const destDir = './static/dist/'
const tempDir = './static/temp/'

return gulp.src('./static/js/*.js')
    .pipe(concat('index.js'))
    .pipe(gulp.dest(tempDir))
    .pipe(minify({noSource: true}))
    .pipe(gulp.dest(destDir))


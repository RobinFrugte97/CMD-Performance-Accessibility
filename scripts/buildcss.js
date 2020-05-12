const gulp = require('gulp')
const concat = require('gulp-concat')
const minify = require('gulp-clean-css')

return gulp.src('./static/css/*.css')
    .pipe(concat('index.css'))
    .pipe(minify())
    .pipe(gulp.dest('static/dist'))

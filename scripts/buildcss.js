const gulp = require('gulp')
const concat = require('gulp-concat')
const minify = require('gulp-clean-css')
const order = require("gulp-order")

return gulp.src('./static/css/*.css')
    .pipe(order([
        "static/css/reset.css",
        "static/css/header.css",
        "static/css/*.css",
        "static/css/footer.css"
    ], { base: './' }))
    .pipe(concat('index.css'))
    // .pipe(minify())
    .pipe(gulp.dest('static/dist'))

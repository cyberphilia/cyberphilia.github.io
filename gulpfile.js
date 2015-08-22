var gulp = require('gulp');    
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var notify = require("gulp-notify");

var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
//var bower = require('gulp-bower');

var config = {
    sassPath: './resources/sass',
    bowerDir: './bower_components',
    publicDir: './public'
}

gulp.task('icons', function() {
    return gulp.src(config.bowerDir + '/fontawesome/fonts/**.*')
        .pipe(gulp.dest('./public/fonts'));
});


// gulp.task('css', function() {
//     return gulp.src('./css/app.scss')
//     .pipe(sass({
//         includePaths: [config.bootstrapDir + '/assets/stylesheets'],
//     }))
//     .pipe(gulp.dest(config.publicDir + '/css'));
// });


// pile Our Sass
gulp.task('sass', function() {
    gulp.src('./resources/scss/mine.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/css'));
});

// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('./resources/js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./public/js/'));
});
gulp.task('bootstrap_scripts', function() {
    return gulp.src([config.bowerDir + '/bootstrap-sass-official/assets/javascripts/**.*',config.bowerDir +'/jquery/dist/**.*'])
        .pipe(gulp.dest('./public/js/'));
});


// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('./resources/js/*.js', ['lint', 'scripts','bootstrap_scripts']);
    gulp.watch('./resources/scss/mine.scss', ['sass']);
});

// Default Task
gulp.task('default', ['icons','sass','scripts', 'watch']);
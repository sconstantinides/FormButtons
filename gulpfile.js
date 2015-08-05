
var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    haml = require('gulp-haml'),
    minifyCss = require('gulp-minify-css');

// Check JS for errors
gulp.task('lint', function() {
  return gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Concatenate & minify JS
gulp.task('scripts', function() {
  return gulp.src('js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist'))
    .pipe(rename('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

// Compile & minify SASS
gulp.task('styles', function() {
  return gulp.src('sass/*.sass')
    .pipe(sass())
    .pipe(concat('all.css'))
    .pipe(gulp.dest('dist'))
    .pipe(minifyCss())
    .pipe(rename('all.min.css'))
    .pipe(gulp.dest('dist'));
});

// Compile index.html
gulp.task('index', function() {
  gulp.src('index.haml')
    .pipe(haml())
    .pipe(gulp.dest('./'));
});

// Watch for changes
gulp.task('watch', function() {
  gulp.watch('js/*.js', ['lint', 'scripts']);
  gulp.watch('sass/*.sass', ['styles']);
  gulp.watch('index.haml', ['index']);
});

// Run tasks
gulp.task('default', ['lint', 'scripts', 'styles', 'index', 'watch']);


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

// Minify JS
gulp.task('scripts', function() {
  return gulp.src('js/*.js')
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .on('error', onError)
    .pipe(gulp.dest('js/min'));
});

// Compile & minify SASS
gulp.task('styles', function() {
  return gulp.src('sass/*.sass')
    .pipe(sass())
    .on('error', onError)
    .pipe(gulp.dest('css'))
    .pipe(minifyCss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('css/min'))
    .pipe(concat('all.min.css'))
    .pipe(gulp.dest('css/min'));
});

// Compile index.html
gulp.task('index', function() {
  gulp.src('index.haml')
    .pipe(haml())
    .on('error', onError)
    .pipe(gulp.dest('./'));
});

// Watch for changes
gulp.task('watch', function() {
  gulp.watch('js/*.js', ['lint', 'scripts']);
  gulp.watch('sass/*.sass', ['styles']);
  gulp.watch('index.haml', ['index']);
});

// Error logging
function onError(err) {
  console.log(err);
  this.emit('end');
}

// Run tasks
gulp.task('default', ['lint', 'scripts', 'styles', 'index', 'watch']);

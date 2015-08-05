'use strict';

var gulp = require('gulp');
var haml = require('../');


gulp.task('haml', function(){
  gulp.src('./haml/**/*.haml')
  .pipe(haml())
  .pipe(gulp.dest('./html'));
});


gulp.task('default', ['haml']);

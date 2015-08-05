#gulp-Haml
[![Build Status](https://travis-ci.org/stevelacy/gulp-haml.png?branch=master)](https://travis-ci.org/stevelacy/gulp-haml)
[![NPM version](https://badge.fury.io/js/gulp-haml.png)](http://badge.fury.io/js/gulp-haml)

Issues with the output should be reported on [haml-js](https://github.com/creationix/haml-js) OR [haml.js](https://github.com/visionmedia/haml.js) depending on compiler used

## Information

<table>
<tr>
<td>Package</td><td>gulp-haml</td>
</tr>
<tr>
<td>Description</td>
<td>Haml plugin for gulp</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.9</td>
</tr>
<tr>
<td>gulp Version</td>
<td>3.x</td>
</tr>
</table>

## Usage
#### Install
    npm install gulp-haml --save

## Examples

```javascript

// gulpfile.js
// Require the needed packages
var gulp = require('gulp');
var haml = require('gulp-haml');


// Get one .haml file and render
gulp.task('one', function () {
  gulp.src('./haml/file.haml')
    .pipe(haml())
    .pipe(gulp.dest('./html'));
});


// Get all .haml files in one folder and render
gulp.task('folder', function () {
  gulp.src('./haml/blue/*.haml')
    .pipe(haml())
    .pipe(gulp.dest('./haml/blue'));
});



// Get and render all .haml files recursively
gulp.task('haml', function () {
  gulp.src('./haml/**/*.haml')
    .pipe(haml())
    .pipe(gulp.dest('./haml'));
});



// Options
// Change file extension
gulp.task('ext', function () {
  gulp.src('./haml/**/*.haml')
    .pipe(haml({ext: '.php'}))
    .pipe(gulp.dest('./php'));
});



// Default gulp task to run
gulp.task('default', function(){
  gulp.run('haml', 'ext', 'one');
});

```
You can view more examples in the [example folder.](https://github.com/stevelacy/gulp-haml/tree/master/examples)

## Options
`Object, String`

Options to `gulp-haml` are not passed to the Haml compiler. To pass to the compiler, use `compilerOpts: {}`. (see below)

[creationix/haml-js](https://github.com/creationix/haml-js) is the default compiler, the other option is [visionmedia/haml.js](https://github.com/visionmedia/haml.js) (65% faster).

### Options.compiler
`compiler: String`

Example:
```javascript
.pipe(haml({
  compiler: 'visionmedia'
}))

.pipe(haml({
  compiler: 'creationix'
}))
```

### Options.compilerOpts
`compilerOpts: Object`

Example:
```javascript
.pipe(haml({
  compiler: 'visionmedia',
  compilerOpts: {
    cache: false
  }
}))
```

### Options.ext
`ext: String`

Example:

    .pipe(haml({ext: '.php'}))
    .pipe(haml({ext: '.txt'}))






## LICENSE

(MIT License)

Copyright (c) 2015 Steve Lacy <me@slacy.me> slacy.me - Fractal <contact@wearefractal.com> wearefractal.com

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

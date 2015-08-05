'use strict';

var should = require('should');
var gutil = require('gulp-util');
var path = require('path');
var haml = require('../');
var fs = require('fs');

require('mocha');

describe('gulp haml', function () {

  function fakeFile (name) {
    return new gutil.File({
      base: 'test/src',
      cwd: 'test/',
      path: 'test/src/haml.haml',
      contents: fs.readFileSync('test/src/' + name + '.haml')
    });
  }

  function checkFile (name, ext, done) {
    return function (file) {
      should.exist(file);
      should.exist(file.path);
      should.exist(file.contents);
      String(path.extname(file.path)).should.equal('.' + ext);
      String(file.contents)
        .should
        .equal(fs.readFileSync('test/expected/' + name + '.html', 'utf8'));
      done();
    };
  }

  it('should render haml .haml to HTML .html', function (done){
    var hamlStream = haml();

    hamlStream.once('data', checkFile('creationix', 'html', done));
    hamlStream.write(fakeFile('creationix'));
  });

  it('should change the extension to .php if defined by opts.ext', function (done) {
    var hamlStream = haml({
      ext: '.php'
    });

    hamlStream.once('data', checkFile('creationix', 'php', done));
    hamlStream.write(fakeFile('creationix'));
  });

  it('should switch compilers if specified in options', function (done) {
    var hamlStream = haml({
      compiler: 'visionmedia'
    });

    hamlStream.once('data', checkFile('visionmedia', 'html', done));
    hamlStream.write(fakeFile('visionmedia'));
  });
});

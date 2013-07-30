/*
 * grunt-simple-vows
 * https://github.com/yaymukund/grunt-simple-mocha
 *
 * Copyright (c) 2012 Mukund Lakshman
 * Licensed under the MIT license.
 */

function buildCommand(paths, options) {
  var command = 'vows --color ';

  if (options.reporter) {
    command += '--' + options.reporter + ' ';
  }
  if (options.verbose) {
    command += '--verbose ';
  }
  if (options.watch) {
    command += '--watch ';
  }

  console.log(command + paths.join(' '));
  return command + paths.join(' ');
}

module.exports = function(grunt) {

  var path = require('path');

  grunt.registerMultiTask('simplevows', 'Run tests with vows', function() {

    var filepaths = grunt.file.expandFiles(this.file.src);
    grunt.file.clearRequireCache(filepaths);

    var paths = filepaths.map(path.resolve),
        options = this.data.options || {};

    var done = this.async(),
        vows = require('child_process').exec(buildCommand(paths, options));

    vows.stdout.pipe(process.stdout);
    vows.stderr.on('data', function(data) {
      grunt.log.error(data);
    });
    vows.on('exit', function(code) {
      done(code);
    });
  });
};

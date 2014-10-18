/*
* grunt-blink
* https://github.com/jedmao/blink
*
* Copyright (c) 2014 Jed Mao
* Licensed under the MIT license.
*/
///<reference path="../node_modules/blink/blink.d.ts"/>
var blink = require('blink');

var through = require('through2');
var vfs = require('vinyl-fs');

// ReSharper disable once UnusedLocals
function task(grunt) {
    function logCompileStatus() {
        return through.obj(function (file, enc, cb) {
            grunt.verbose.or.writeln('Compiling "' + file.path + '"...');
            this.push(file);
            cb();
        });
    }

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks
    grunt.registerMultiTask('blink', 'Grunt plugin for Blink.', function () {
        var options = this.options();
        var done = this.async();

        this.files.forEach(function (filePair) {
            vfs.src(filePair.src).pipe(logCompileStatus()).pipe(blink(filePair.dest, options)).on('error', function (err) {
                grunt.log.notverbose.error().error(err.message);
                grunt.fail.warn(err);
            }).pipe(vfs.dest(filePair.dest)).on('end', function () {
                grunt.verbose.ok();
                done();
            });
        });
    });
}
;

module.exports = task;

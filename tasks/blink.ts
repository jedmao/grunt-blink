/*
 * grunt-blink
 * https://github.com/jedmao/blink
 *
 * Copyright (c) 2014 Jed Mao
 * Licensed under the MIT license.
 */

///<reference path="../node_modules/blink/blink.d.ts"/>
import blink = require('blink');


// ReSharper disable once UnusedLocals
function task(grunt) {

	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks

	grunt.registerMultiTask('blink', 'Grunt plugin for Blink.', function() {
		var options = this.options();
		var done = this.async();
		var count = this.files.length;

		blink.compile(options, this.files, (err, config, result) => {
			if (result.src) {
				grunt.verbose.or.writeln('Compiling "' + result.src + '"...');
			}
			if (err) {
				grunt.log.notverbose.error().error(err.message);
				grunt.fail.warn(err);
			}
			if (result.dest) {
				grunt.file.write(result.dest, result.contents);
				grunt.log.verbose.writeln('File "' + result.dest + '" created.');
			} else {
				grunt.log.writeln(result.contents);
			}
			grunt.verbose.ok();
			if (--count === 0) {
				done();
			}
		});

	});

};

export = task;

/*
 * grunt-blink
 * https://github.com/jedmao/blink
 *
 * Copyright (c) 2014 Jed Mao
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
	'use strict';

	require('time-grunt')(grunt);

	grunt.initConfig({

		clean: {
			files: [
				'test/**/*.js'
			],
		},

		tslint: {
			options: {
				configuration: grunt.file.readJSON('tslint.json')
			},
			files: {
				src: [
					'tasks/*.ts',
					'test/**/*.ts'
				]
			}
		},

		typescript: {
			options: {
				module: 'commonjs',
				target: 'es5'
			},
			tasks: {
				src: ['tasks/*.ts'],
				dest: ''
			},
			fixtures: {
				src: ['test/fixtures/**/*.ts'],
				dest: ''
			},
			specs: {
				src: ['test/spec/**/*.ts'],
				dest: ''
			}
		},

		blink: {
			fixtures: {
				src: 'test/fixtures/*.js',
				dest: 'tmp/'
			}
		},

		mochaTest: {
			test: {
				options: {
					reporter: 'spec',
					clearRequireCache: true
				},
				src: 'test/spec/**/*.spec.js'
			}
		},

		watch: {
			tasksTs: {
				files: ['tasks/*.ts'],
				tasks: ['typescript:tasks']
			},
			fixturesTs: {
				files: ['test/fixtures/**/*.ts'],
				tasks: ['typescript:fixtures']
			},
			specsTs: {
				files: ['test/spec/**/*.ts'],
				tasks: ['typescript:specs']
			},
			tasksJs: {
				files: ['tasks/*.js'],
				tasks: ['mochaTest']
			},
			fixturesJs: {
				files: ['test/fixtures/**/*.js'],
				tasks: ['_blink', 'mochaTest']
			},
			specsJs: {
				files: ['test/spec/**/*.js'],
				tasks: ['mochaTest']
			}
		}

	});

	require('load-grunt-tasks')(grunt);

	grunt.registerTask('default', ['_test', 'watch']);
	grunt.registerTask('_test', ['build', 'mochaTest']);
	grunt.registerTask('build', ['clean', 'tslint', 'typescript', '_blink']);
	grunt.registerTask('_blink', function() {
		grunt.task.loadTasks('tasks');
		grunt.task.run('blink');
	});
	grunt.registerTask('test', ['_test', 'clean']);

};

'use strict';
var path = require('path');
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;

var folderMount = function folderMount(connect, point) {
	return connect.static(path.resolve(point));
};

module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		livereload: {
			port: 35729 // Default livereload listening port.
		},
		connect: {
			livereload: {
				options: {
					port: 9001,
					middleware: function(connect, options) {
						return [lrSnippet, folderMount(connect, options.base)]
					}
				}
			}
		},
		jade: {
			compile: {
				options: {
					data: {
						debug: false
					}
				},
				files: {
					"www/index.html": ["src/index.jade"]
				}
			}
		},
		compass: {
			dev: {
				options: {
					sassDir: 'src',
					cssDir: 'www',
					environment: 'dev'
				}
			}
		},
		// Configuration to be run (and then tested)
		regarde: {
			jade: {
				files: 'src/**/*.jade',
				tasks: ['jade']
			},
			scss: {
				files: 'src/**/*.scss',
				tasks: ['compass']
			},
			html: {
				files: 'www/**/*.html',
				tasks: ['livereload']
			},
			css: {
				files: 'www/**/*.css',
				tasks: ['livereload']
			}
		},

	});

	grunt.loadNpmTasks('grunt-regarde');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-livereload');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-jade');

	grunt.registerTask('default', ['livereload-start', 'connect', 'regarde']);
};

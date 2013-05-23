/*
 * stylelib 
 *
 * Copyright (c) 2012 Russ Martinez, contributors
 * Licensed under the MIT license.
 * */

'use strict';

// Basic template description
exports.description = 'Grunt init template that creates a Grunt project for building out style guides and pattern libraries leveraging SASS and LiveReload.';

// Template-specific notes to be displayed before question prompts.
exports.notes = 'TBD';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _npm ' + 'install_. After that, you may execute project tasks with _grunt_. For ' + 'more information about installing and configuring Grunt, please see ' + 'the Getting Started guide:' + '\n\n' + 'http://gruntjs.com/getting-started';

//exports.warnOn = '*';
exports.template = function(grunt, init, done) {

	init.process({},
	[
	init.prompt('name'), 
	init.prompt('description', 'The next awesome frontend pattern library.'), 
	init.prompt('version'), 
	init.prompt('repository'), 
	init.prompt('licenses', 'MIT'), 
	init.prompt('author_name')
	], function(err, props) {

		// Files to copy (and process)
		var files = init.filesToCopy(props);

		// add properly-named license files.
		init.addLicenseFiles(files, props.licenses);

		// Actually coppy (and process) files.
		init.copyAndProcess(files, props);

		// Generate package.json file, used by npm and grunt.
		init.writePackageJSON('package.json', {
			name: "styleguider",
			version: "0.0.0-ignored",
			node_version: '>= 0.8.0',
			devDependencies: {
				'grunt': "~0.4.1",
				'grunt-contrib-compass': '~0.2.0',
				'grunt-regarde': '~0.1.1',
				'grunt-contrib-connect': '~0.3.0',
				'grunt-contrib-livereload': '~0.1.2',
				'grunt-contrib-jade': '~0.6.0'
			}
		});

		done();

	});

};


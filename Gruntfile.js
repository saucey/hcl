module.exports = function(grunt) {

	// 1. All configuration goes here
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// cssmin: {
		// 	frontend: {
		// 		expand: true,
		// 		cwd: 'public/css/',
		// 		src: ['combined.css', '!*.min.css'],
		// 		dest: 'public/css/',
		// 		ext: '.css'
		// 	},
		// },

		less: {
			app: {
				files: {
					'assets/main.css': 'app/app.less',
				}
			},
		},


		watch: {
			grunt: {
				files: ['Gruntfile.js']
			},

			css: {
				files: ['app/**/*.less'],
				tasks: ['less'],
				options: {
					spawn: false,
				}
			},
		},
	});

	require('load-grunt-tasks')(grunt);

	grunt.registerTask('default', ['less:app', 'watch']);


};
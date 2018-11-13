/*global module:false*/
module.exports = function(grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        cssmin: {
			target: {
				files: {
					'css/tags.min.css': [
						'css/tags.css'
					]
				}
			}
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task.
    grunt.registerTask('default', ['cssmin']);

};

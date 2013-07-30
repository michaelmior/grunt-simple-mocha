module.exports = function(grunt) {
  grunt.initConfig({
    simplevows: {
      all: {
        src: 'test/**/*.js',
        options: {
          reporter: 'spec'
        }
      }
    }
  });

  // For this to work, you need to have run `npm install grunt-simple-vows`
  grunt.loadNpmTasks('grunt-simple-vows');

  // Add a default task.
  grunt.registerTask('default', 'simplevows');
};

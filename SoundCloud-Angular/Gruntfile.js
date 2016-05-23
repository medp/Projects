module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
        build: {
            src: 'app/js/app.js',
            dest: 'app/js/app.min.js'
        }
    },
    connect: {
      server: {
          options: {
              keepalive: true,
              base:'app',
              port: '8080'
          }
      }
    },
    karma: {
      unit: {
        options: {
          frameworks: ['jasmine'],
          singleRun: true,
          browsers: ['Chrome'],
          files: [
            'public/components/angular/angular.js',
            'public/components/angular-mocks/angular-mocks.js',
            'src/js/**/*.js'
          ]
        }
      }
    }

});

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['uglify']);

};

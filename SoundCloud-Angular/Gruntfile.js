module.exports = function(grunt) {
    'use strict';


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        base: '.',
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
                    base: 'app',
                    port: '8080'
                }
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                autoWatch: true,
                runnerPort: 9999,
                browsers: ['Chrome'],
                singleRun: false
                    // options: {
                    //   frameworks: ['jasmine'],
                    //   // singleRun: true,
                    //   // browsers: ['Chrome'],
                    //   // files: [
                    //   //   'public/components/angular/angular.js',
                    //   //   'public/components/angular-mocks/angular-mocks.js',
                    //   //   'src/js/**/*.js'
                    //   // ]
                    // }
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: false,
                    flatten: true,
                    dest: 'app/lib/',
                    src: [
                        'bower_components/angular/angular.min.js',
                        'bower_components/angular-route/angular-route.js',
                        'bower_components/jquery/dist/jquery.js'
                    ]
                }]
            },
        },
        html2js: {
            main: {
                src: ['app/templates/*.html'],
                dest: 'tmp/templates.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-html2js');

    grunt.registerTask('default', ['uglify', 'copy:dist']);
    // 'html2js:main'

};

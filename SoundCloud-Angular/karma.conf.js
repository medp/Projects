// Karma configuration
// Generated on Fri Feb 28 2014 13:23:58 GMT+0200 (GTB Standard Time)
/*jslint sloppy: true */
/*global module*/

module.exports = function(config) {
    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: '../',


        // frameworks to use
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            //3rd Party Code
            'SoundCloud-Angular/bower_components/jquery/dist/jquery.js',
            'SoundCloud-Angular/bower_components/angular/angular.js',
            'SoundCloud-Angular/bower_components/angular-mocks/angular-mocks.js',
            'SoundCloud-Angular/bower_components/angular-route/angular-route.js',


            //App-specific Code
            'SoundCloud-Angular/app/js/*.js',
            'SoundCloud-Angular/app/js/Business/*.js',
            'SoundCloud-Angular/app/js/Controller/*.js',
            'SoundCloud-Angular/app/js/Repo/*.js',
            'SoundCloud-Angular/app/js/Service/*.js',
            'SoundCloud-Angular/app/js/View/*.js',


            //test filesremove any loaders after the server call
            'SoundCloud-Angular/app/test/*.js'
        ],


        // list of files to exclude
        exclude: [
            // 'app/js/minify/*.js'
        ],

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera (has to be installed with `npm install karma-opera-launcher`)
        // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
        // - PhantomJS
        // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
        browsers: ['PhantomJS'],


        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,


        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false,

        preprocessors: {
            'app/js/app.js': 'coverage',
            'app/js/route.js': 'coverage',
            'app/js/Business/*.js': 'coverage',
            'app/js/Repo/*.js': 'coverage',
            'app/js/Service/*.js': 'coverage',
            'app/js/View/*.js': 'coverage',
            'app/js/Controller/*.js': 'coverage',
        },

        //plugins
        plugins: [
            'karma-jasmine',
            'karma-coverage',
            'karma-phantomjs-launcher',
            'karma-html-reporter',
            'karma-junit-reporter',
            'karma-chrome-launcher'
        ],


        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['dots', 'coverage', 'progress', 'html', 'junit'],

        // tell karma how you want the coverage results
        coverageReporter: {
            reporters: [{
                type: 'html',
                dir: 'reports_js_webclient/coverage/html'
            }, {
                type: 'lcovonly',
                dir: 'reports_js_webclient/coverage'
            }, {
                type: 'cobertura',
                dir: 'reports_js_webclient/coverage'
            }]
        },

        htmlReporter: {
            outputDir: 'reports_js_webclient/jasmine_report',
            templatePath: 'node_modules/karma-html-reporter/jasmine_template.html'
        },

        junitReporter: {
            outputDir: '/reports_js_webclient',
            outputFile: '/reports_js_webclient/jasmine-results.xml'
        }
    });
};

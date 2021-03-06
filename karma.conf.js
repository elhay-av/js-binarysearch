// Karma configuration
// Generated on Sat May 28 2016 02:54:51 GMT+0400 (Arabian Standard Time)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: './',



        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine', 'requirejs'],


        // list of files / patterns to load in the browser
        files: [
            'test-main.js',
            'lib/js-binarysearch.js', {
                pattern: 'spec/*Spec.js',
                included: false
            }
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            "lib/*js": ["coverage"]
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['coverage'],


        coverageReporter: 
        // {
        //     type: 'html',
        //     subdir: '../.',
        //     file: 'coverage'
        // },
        {
            type: 'lcovonly',
            subdir: '../.',
            file: 'lcovonly.info'
        },




        // web server port
        port: 9999,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // plugins : ['karma-jasmine', 'karma-phantomjs-launcher'],

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],




        // keep karma running in the background
        // background: true,


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true

        // Concurrency level
        // how many browser should be started simultaneous
        // concurrency: Infinity
    })
}
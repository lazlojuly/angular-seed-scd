//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'app.js',
      'components/**/*.js',
      'components/**/*.html',
      'view*/**/*.js',
      'services/**/*.js',
      {
        pattern: 'fixtures/*.json',
        watched: true, served: true, included: false,
      }
    ],

    autoWatch: true,

    frameworks: ['jasmine-jquery', 'jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-jasmine-jquery',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};

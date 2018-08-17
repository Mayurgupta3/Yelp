module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    },
    files: ['tests.webpack.js'],
    exclude: [],
    preprocessors: {'tests.webpack.js': ['webpack', 'sourcemap']},
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity,
    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-webpack',
      'karma-phantomjs-launcher',
      'karma-spec-reporter',
      'karma-sourcemap-loader'
    ],
  })
}

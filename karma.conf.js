module.exports = function(config) {
  var testFiles = [
    'public/ng/requirejs-config.js',
    'test/test-main.js',
    { pattern: 'public/lib/**/*.js', included: false },
    { pattern: 'public/**/*.js', included: false }
  ];

  var options = JSON.parse(process.argv[2]);

  if (options.tests) {
    testFiles.push({ pattern: 'test/unit/' + options.test, included: false });
  } else {
    testFiles.push({ pattern: 'public/**/*-spec.js', included: false });
  }

  config.set({
    basePath: '',
    frameworks: ['requirejs', 'mocha', 'chai'],
    files: testFiles,
    autoWatch: false,
    captureTimeout: 60000,

  });
};

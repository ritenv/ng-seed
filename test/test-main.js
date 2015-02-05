var tests = [];
var preload = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/.*-spec\.js$/.test(file)) {
      tests.push(file);
    } else if (/ng\//.test(file) && (!/requirejs-config*/.test(file)) && !/.*-spec-ui\.js$/.test(file)) {
      preload.push(file.replace('/base/public/', '').replace('.js', ''));
    }
  }
}
requirejsConfig.paths['angular-mocks'] = 'lib/angular-mocks/angular-mocks';
requirejsConfig.shim['angular-mocks'] = {
  deps: ['angular']
};

function startTesting() {
	require(preload, function () { 
        window.__karma__.start();
    });
}
requirejsConfig.baseUrl = '/base/public';
requirejsConfig.deps = tests;
requirejsConfig.callback = startTesting;

requirejs.config(requirejsConfig);
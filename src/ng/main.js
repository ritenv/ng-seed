(function(requirejs) {
  'use strict';
  requirejs.config(window.requirejsConfig);

  require([
    'angular',
    'ng/app'
  ], function (angular) {
    // Needs to be separate from app since we don't want to bootstrap to
    // document when running tests
    angular.bootstrap(document, ['ng-seed']);
  });
})(window.requirejs);
define(
  [
    'angular',
    'ng/name/name-service',
    'ng/name/name-directive'
  ],
  function(angular) {
    'use strict';

    angular
      .module('ng-seed.name-controller', [
        'ng-seed.name-service',
        'ng-seed.name-directive'
      ])
      .controller('HomeController', [
        '$scope',
        'NameService',
        function($scope, NameService) {
          $scope.nameService = NameService;
        }
      ]);
  }
);
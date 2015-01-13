define(
  [
    'angular',
    'js/service/name-service',
    'js/directive/name-directive'
  ],
  function(angular) {
    'use strict';

    angular
      .module('ng-seed.home-controller', [
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
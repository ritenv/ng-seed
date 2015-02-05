define(
  [
    'angular',
    'angular-route',
    'ng/name/name-controller'
  ],
  function(angular) {
    'use strict';

    angular
      .module('ng-seed', ['ngRoute', 'ng-seed.name-controller'])
      .config([
        '$routeProvider',
        '$sceProvider',
        '$locationProvider',
        function($routeProvider, $sceProvider, $locationProvider) { // jshint ignore:line
          $routeProvider
            .when('/', {
              controller: 'HomeController',
              templateUrl: 'public/template/home.html'
            })
            .otherwise({ redirectTo: '/' });

          // Disables Strict Contextual Escaping for IE8 compatibility
          $sceProvider.enabled(false);

         if (window.history && history.pushState) {
           $locationProvider.html5Mode(true);
         }
        }
      ]);
  }
);
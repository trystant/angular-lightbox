'use strict';

angular.module('angularLightboxApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'angularLightboxApp.directives'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/lightbox', {
        templateUrl: 'views/lightbox.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

angular.module('angularLightboxApp.directives', []);
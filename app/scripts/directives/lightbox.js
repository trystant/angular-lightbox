'use strict';

angular.module('angularLightboxApp')
  .directive('lightbox', function () {
    return {
      templateUrl: '/app/views/ng-templates/lightbox.html',
      restrict: 'E',
      scope: {
        images: '='
      }
    };
  });

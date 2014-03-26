'use strict';

angular.module('angularLightboxApp')
  .directive('lightbox', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the lightbox directive');
      }
    };
  });

'use strict';

angular.module('angularLightboxApp')
  .directive('lightbox', function () {
    return {
    	link: function (scope, element, attributes) {
    		scope.images = [
    			{
    				src: '/app/images/thumb_image1.jpg',
    				header: 'Blue Flower',
    				description: 'A Blue flower, sitting prettily'
    			},
    			{
    				src: '/app/images/thumb_image2.jpg',
    				header: 'Autumn Leaves',
    				description: 'Look at the seasons change'
    			},
    			{
    				src: '/app/images/thumb_image3.jpg',
	   				header: 'leaf droplets',
    				description: 'If you look closely enough, you can see yourself in the droplets of water'
    			}
    		]
    	},
      restrict: 'E',
      scope: {
        images: '='
      },
      templateUrl: '/app/views/ng-templates/lightbox.html',
    };
  });

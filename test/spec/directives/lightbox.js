'use strict';

describe('Directive: lightbox', function () {

  // load the directive's module
  beforeEach(module('angularLightboxApp','app/views/ng-templates/lightbox.html'));

  var element,
    scope, template;

  beforeEach(inject(function ($rootScope, $templateCache) {
    template = $templateCache.get('app/views/ng-templates/lightbox.html');
    $templateCache.put('app/views/ng-templates/lightbox.html',template);
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    //element = angular.element('<lightbox images="album"></lightbox>');
    element = $compile(template)(scope);
    expect(element.find('a').length).toEqual(1);
  }));
});

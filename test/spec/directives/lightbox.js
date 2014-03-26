'use strict';

describe('Directive: lightbox', function () {

  // load the directive's module
  beforeEach(module('angularLightboxApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<lightbox></lightbox>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the lightbox directive');
  }));
});

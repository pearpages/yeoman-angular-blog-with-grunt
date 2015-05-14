'use strict';

describe('Directive: blgMenu', function () {

  // load the directive's module
  beforeEach(module('yoAngBlogApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<blg-menu></blg-menu>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the blgMenu directive');
  }));
});

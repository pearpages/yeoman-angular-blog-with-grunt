'use strict';

describe('Controller: NewPostCtrl', function () {

  // load the controller's module
  beforeEach(module('yoAngBlogApp'));

  var NewPostCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewPostCtrl = $controller('NewPostCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

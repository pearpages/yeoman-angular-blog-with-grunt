'use strict';

describe('Service: checkCreds', function () {

  // load the service's module
  beforeEach(module('yoAngBlogApp'));

  // instantiate service
  var checkCreds;
  beforeEach(inject(function (_checkCreds_) {
    checkCreds = _checkCreds_;
  }));

  it('should do something', function () {
    expect(!!checkCreds).toBe(true);
  });

});

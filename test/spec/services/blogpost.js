'use strict';

describe('Service: blogPost', function () {

  // load the service's module
  beforeEach(module('yoAngBlogApp'));

  // instantiate service
  var blogPost;
  beforeEach(inject(function (_blogPost_) {
    blogPost = _blogPost_;
  }));

  it('should do something', function () {
    expect(!!blogPost).toBe(true);
  });

});

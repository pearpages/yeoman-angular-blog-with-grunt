'use strict';

/**
 * @ngdoc service
 * @name yoAngBlogApp.login
 * @description
 * # login
 * Factory in the yoAngBlogApp.
 */
angular.module('yoAngBlogApp')
  .factory('Login', ['$resource',function ($resource) {
    return $resource(
      "http://nodeblog-micbuttoncloud.rhcloud.com/NodeBlog/login",
      {},
      {login: {method: 'POST', cache:false, isArray:false}}
      );
  }]);

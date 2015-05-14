'use strict';

/**
 * @ngdoc function
 * @name yoAngBlogApp.controller:NewPostCtrl
 * @description
 * # NewPostCtrl
 * Controller of the yoAngBlogApp
 */
angular.module('yoAngBlogApp')
  .controller('NewPostCtrl',['$scope','$http','$location','Credentials','blogPost',function ($scope,$http,$location,Credentials,blogPost) {
    
    $http.defaults.headers.common['Authorization'] = 'Basic' + Credentials.getToken();

    blogPost.save();
  }]);

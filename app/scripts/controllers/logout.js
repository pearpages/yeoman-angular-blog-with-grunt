'use strict';

/**
 * @ngdoc function
 * @name yoAngBlogApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the yoAngBlogApp
 */
angular.module('yoAngBlogApp')
  .controller('LogoutCtrl', ['$scope','$location','Credentials',function ($scope,$location,Credentials) {
    Credentials.delete();
    $location.path('/login');
  }]);

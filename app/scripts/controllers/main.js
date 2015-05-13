'use strict';

/**
 * @ngdoc function
 * @name yoAngBlogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoAngBlogApp
 */
angular.module('yoAngBlogApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

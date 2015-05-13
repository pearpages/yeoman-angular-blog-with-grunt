'use strict';

/**
 * @ngdoc function
 * @name yoAngBlogApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yoAngBlogApp
 */
angular.module('yoAngBlogApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

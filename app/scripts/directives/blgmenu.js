'use strict';

/**
 * @ngdoc directive
 * @name yoAngBlogApp.directive:blgMenu
 * @description
 * # blgMenu
 */
angular.module('yoAngBlogApp')
  .directive('blgMenu', function () {
    return {
      templateUrl: 'views/header.html',
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        scope.label = attrs.menuTitle;
    }};
  });

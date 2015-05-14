'use strict';

/**
 * @ngdoc overview
 * @name yoAngBlogApp
 * @description
 * # yoAngBlogApp
 *
 * Main module of the application.
 */
angular
  .module('yoAngBlogApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$routeProvider',function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'BlogController'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/blogPost/:id',{
        templateUrl: 'views/blogPost.html',
        controller: 'BlogPostController'
      })
      .when('/new-post', {
        templateUrl: 'views/new-post.html',
        controller: 'NewPostCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

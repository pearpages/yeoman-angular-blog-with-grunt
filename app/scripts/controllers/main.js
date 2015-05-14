'use strict';

angular.module('yoAngBlogApp')
  .controller('BlogController', ['$scope','blogPost',function ($scope,blogPost) {
 		$scope.blogList = blogPost.get();
  }])
    .controller('BlogPostController', ['$scope','$routeParams','blogPost',function ($scope,$routeParams,blogPost) {
 		
  		var blogId = $routeParams.id;

  		$scope.blogEntry = blogPost.get(blogId);
  		
  }]);

'use strict';

angular.module('yoAngBlogApp')
  .controller('BlogController', ['$scope','blogPost','Credentials','$location',function ($scope,blogPost,Credentials,$location) {
 		if(!Credentials.check()){
 			$location.path('/login');
 		}
 		$scope.blogList = blogPost.get();
  }])
    .controller('BlogPostController', ['$scope','$routeParams','blogPost','Credentials','$location',function ($scope,$routeParams,blogPost,Credentials,$location) {
 		if(!Credentials.check()){
 			$location.path('/login');
 		}
  		var blogId = $routeParams.id;

  		$scope.blogEntry = blogPost.get(blogId);
  		
  }]);

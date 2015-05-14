'use strict';

/**
 * @ngdoc function
 * @name yoAngBlogApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the yoAngBlogApp
 */
angular.module('yoAngBlogApp')
  .controller('LoginCtrl', 
  	['$scope','$location','Login','Credentials',function ($scope,$location,Login,Credentials) {
    
    	$scope.submit = function (){
    		$scope.sub = true;
    		var postData = {
    			"username": $scope.username,
    			"password": $scope.password
    		};

            Login.login({}, postData,
            function success(response){
                console.log("Success: " + JSON.stringify(response));
                if(response.authenticated !== undefined){
                    Credentials.set($scope.username,$scope.password);
                    $location.path('/');
                }else{
                    $scope.error = "Login Failed";
                }
            },
            function error(errorResponse){
                console.log("Error: "+ JSON.stringify(errorResponse));
            });
    	};

    	
  }]);

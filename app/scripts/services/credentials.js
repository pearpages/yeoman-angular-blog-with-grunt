'use strict';

/**
 * @ngdoc service
 * @name yoAngBlogApp.checkCreds
 * @description
 * # checkCreds
 * Factory in the yoAngBlogApp.
 */
 angular.module('yoAngBlogApp')
 .factory('Credentials', ['$cookies',function ($cookies) {

  return {
    check:function (){
      var returnVal = false;
      var creds = $cookies.credentials;
      if(creds !== undefined && creds !== ""){
        returnVal = true;
      }

      return returnVal;
    },
    set:function(username, password){
      var token = username.concat(":",password);

      $cookies.credentials = token;
      $cookies.username = username;
    },
    delete: function (){
      $cookies.credentials = "";
      $cookies.username = "";  
    },
    getToken: function (){
      var returnVal = "";
      var creds = $cookies.credentials;
      if(creds !== undefined && creds !== ""){
        returnVal = btoa(creds);
      }
      return returnVal;
    },
    getUsername: function (){
      var returnVal = '';
      var username = $cookies.username;
      if(username !== undefined && username !== ""){
        returnVal = unsername;
      }
      return returnVal;
    }
  };
}]);

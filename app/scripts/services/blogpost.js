'use strict';

/**
 * @ngdoc service
 * @name yoAngBlogApp.blogPost
 * @description
 * # blogPost
 * Factory in the yoAngBlogApp.
 */
angular.module('yoAngBlogApp')
  .factory('blogPost', function () {
    
    var blogList = [
        {
          "_id":1,
          "date": 1400623623107,
          "introText": "Nam congue lacus in diam varius",
          "blogText": "Nam congue lacus in diam varius, a dapibus purus finibus. Nulla diam odio, commodo non elit vel, euismod rutrum lectus. Sed quis purus lorem. Quisque quis nibh lectus. Sed diam orci, aliquet sit amet mi viverra, molestie dignissim elit. Donec tincidunt nunc sapien. Vestibulum ac ante ut mi condimentum ultricies vitae non quam. Fusce nec lectus vel turpis bibendum pulvinar eu vel justo. Etiam ut orci non nisl eleifend mattis. Suspendisse fringilla arcu nec mi feugiat, nec tincidunt nisi cursus. Nunc accumsan ornare augue, a bibendum sem.",
          "comments":[
            {"commentText": "Mauris ut mi eu neque efficitur sagittis et non elit."},
            {"commentText": "Duis varius massa vel eros euismod, quis luctus justo iaculis."}
          ]
        },
        {
          "_id":2,
          "date": 1400626773107,
          "introText": "Nullam scelerisque tincidunt enim",
          "blogText": "Nullam scelerisque tincidunt enim, eu egestas massa scelerisque sed. Sed et lectus rhoncus, eleifend dui eu, facilisis elit. Nullam mi dolor, dapibus sit amet odio sed, faucibus placerat risus. Sed vitae arcu eget mi elementum volutpat. Aenean maximus est a lectus bibendum congue. Cras sagittis sapien non mattis faucibus. Nulla molestie, erat nec varius facilisis, metus ante gravida massa, sit amet lobortis enim lorem vitae tortor. Vivamus viverra vitae mauris ut congue. Morbi consequat faucibus eleifend. Fusce gravida justo id purus posuere, quis euismod metus imperdiet. Nam porttitor ligula fringilla tincidunt sagittis. Duis aliquet justo at interdum convallis. Aenean iaculis sapien id malesuada fermentum. Duis congue dapibus blandit. Sed sit amet tincidunt dui.",
          "comments":[
            {"commentText": "Curabitur eu massa congue, laoreet elit ut, pretium ex."},
            {"commentText": "Sed commodo lacus nec nisi dictum, id tincidunt sem aliquet."}
          ]
        }
      ];

    // Public API here
    return {
      get: function (id) {
        if(typeof id === 'undefined'){
          return blogList;  
        }else{
          return blogList[id-1];
        }
        
      },
      save: function () {
        return true;
      },
      update: function () {
        return true;
      },
      delete: function () {
        return true;
      }
    };
  });

'use strict';
/**
@ angLogin directive a simple directive which has angLoginController as controller
@template Url fetches the view from either templatecache or from local view
 */
(function(){
angular.module('loginModule')
		.directive('modalDialog', function() {
  return {
    restrict: 'E',
    scope: {
      show: '='
    },
    replace: true, // Replace with the template below
    transclude: true, // we want to insert custom content inside the directive
    controller:"loginUserController",
    link: function(scope, element, attrs) {
      scope.dialogStyle = {};
      if (attrs.width)
        scope.dialogStyle.width = attrs.width;
      if (attrs.height)
        scope.dialogStyle.height = attrs.height;
      scope.hideModal = function() {
        scope.show = false;
      };
    },
    templateUrl: "views/loginModule/loginUser.html"
  };
});
}());
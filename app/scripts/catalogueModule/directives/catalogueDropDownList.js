'use strict';
(function(){
 angular.module('catalogueModule')
     .directive('catalogueDropDownList', function(){
            return {
                restrict: 'E',
                require:"^panel",
                scope:true,
                templateUrl:'views/catalogueModule/catalogueDropDownList.html',
                link:function(scope,elem,attrs){
                    elem.on('click', function(event) {
                       
                    });
                }

            }
        });
})();
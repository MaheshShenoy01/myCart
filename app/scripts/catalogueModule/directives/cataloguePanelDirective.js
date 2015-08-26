'use strict';

(function(){

angular.module('catalogueModule')
     .directive('cataloguePanel', function(){
         return {
             restrict: 'EACM',
             transclude: true,
             scope:true,
             require: '^catalogue',
             templateUrl: 'views/catalogueModule/cataloguePanel.html',
             controller: 'cataloguePanelController',
             link: function(scope, iElm, iAttrs, controller, trans) {
                        
                  scope.addTocart = function(obj){
                    scope.$emit('addTocart',obj);
                    
              }
          }
         }
     })

})();
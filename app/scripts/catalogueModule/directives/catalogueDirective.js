'use strict';

(function(){
	angular.module('catalogueModule')
	   .directive('catalogue',function(){
	   	 return {
	   	 		restrict:'EACM',
	   	 		transclude:true,
	   	 		templateUrl:'views/catalogueModule/mainCatalogue.html',
	   	 		controller:'mainCatalogueController'
	   	 }
    });
})();
	 




   
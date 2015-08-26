'use strict';

(function(){
 
	angular.module('catalogueModule')
    .controller('cataloguePanelController', ['$scope','$stateParams','catalogueDataFactory', function($scope,$stateParams,catalogueDataFactory) {
  
    
        catalogueDataFactory.getAngScData()
            .then(function(response) {
                 
                
              switch($stateParams.fparams){
                    case "fruits":
                           $scope.angscdatas = response.fruits;
                           break;
                    case "vegetables":
                           $scope.angscdatas = response.vegetables;
                           break;
                    case "snacks":
                           $scope.angscdatas = response.snacks;
                           break;
                    case "Groceries":
                         $scope.angscdatas = response.Groceries;
                           break;
                    
                }
             
            }, function(error) {
                console.log(error + "promise rejected due to error");
            });


    }]);

}());
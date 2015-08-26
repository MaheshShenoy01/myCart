'use strict';

(function(){

var catalogueDataFactory = function($http,$q){
	var defer =$q.defer();

	return {
	getAngScData :function(){
							  $http.get("/angLocalData/catalogueData.json")
					        		 .then(function(response) {
					                        if (typeof response.data === 'object') {
					                            defer.resolve(response.data);
					                        } else {
					                            // invalid response
					                           defer.reject(response.data);
					                        }

					                    }, function(response) {
					                        // something went wrong
					                        defer.reject(response.data);
					                    });
					        		
					        		 return defer.promise;
						  }   	
	  		}
	}



angular.module('catalogueModule').factory('catalogueDataFactory',catalogueDataFactory);

}());
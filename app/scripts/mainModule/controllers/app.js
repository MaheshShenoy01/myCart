'use strict';
/**
 * @ngdoc overview
 * @name currprjApp
 * @description
 * # currprjApp
 * Main module of the application.
 */
angular.module('myCartApp', [
    'ngAnimate',
    'ui.router',
    'catalogueModule',
    'loginModule',
    'ngAnimate'
])

.run(
    ['$rootScope', '$state', '$stateParams','$templateCache',
        function($rootScope, $state, $stateParams,$templateCache) {

            // It's very handy to add references to $state and $stateParams to the $rootScope
            // so that you can access them from any scope within your applications.For example,
            // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
            // to active whenever 'contacts.list' or one of its decendents is active.
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
             $rootScope.$on('toggleModal',function(){

             });
        }
        
 

    ]
)

.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/catalogue");


    $stateProvider
        .state('catalogue', {
            url: "/catalogue",
            controller: 'mainCatalogueController'

        })
        
        
    .state('fruits', {
            url: "/:fparams",
            template: '<catalogue><catalogue-panel angscdatas="{{fruits}}"></catalogue-panel></catalogue>',
            controller: 'cataloguePanelController'


        })
        .state('vegetables', {
            url: "/:fparams",
            template: '<catalogue><catalogue-panel angscdatas="{{vegetables}}"></catalogue-panel></catalogue>',
            controller: 'cataloguePanelController'

        })
        .state('Groceries', {
            url: "/Groceries",
            template: '<catalogue><catalogue-panel angscdatas="{{Groceries}}"></catalogue-panel></catalogue>',
            controller: 'cataloguePanelController'

        })
        .state('snacks', {
            url: "/snacks",
            template: '<catalogue><catalogue-panel angscdatas="{{snacks}}"></catalogue-panel></catalogue>',
            controller: 'cataloguePanelController'

        })


});

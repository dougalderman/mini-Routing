var app = angular.module('miniRouting', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider
      .otherwise('/');

  $stateProvider
  	  .state('home', {
  			templateUrl: 'js/home/homeTmpl.html',
  			url: '/',
        controller: 'homeCtrl'
  		})
      .state('settings', {
  			templateUrl: 'js/settings/settingsTmpl.html',
  			url: '/settings',
        controller: 'settingsCtrl'
  		})
      .state('products', {
        templateUrl: 'js/products/productTmpl.html',
        url: '/products/:id',
        controller: 'productsCtrl'
      });




});

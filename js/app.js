var app = angular.module('myApp', ['ngRoute']);


app.config(function($routeProvider, $locationProvider, $httpProvider) {

  $routeProvider
    .when('/home', {
      templateUrl: 'partials/home.html',
      controller: 'HomeController'
    })
    .otherwise({
    	templateUrl: 'partials/home.html',
    	controller: 'HomeController'
    });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);

    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;

});

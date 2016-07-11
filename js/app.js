var app = angular.module('myApp', ['ngRoute']);


app.config(function($routeProvider, $locationProvider, $httpProvider) {

  $routeProvider
    .when('/show', {
      templateUrl: 'partials/show.html',
      controller: 'ShowController'
    })
    .otherwise({
      templateUrl: 'partials/home.html',
      controller: 'HomeController'
    });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);

});

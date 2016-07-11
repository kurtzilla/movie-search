
app.controller('NavController', function($scope, $rootScope, $route, $routeParams, $location) {

  $scope.$route = $route;
  $scope.$location = $location;
  $scope.$routeParams = $routeParams;

  // get current route info
  // console.log('ROUTE', $scope);

  // console.log('ROUTE CURRENT', $route.current);
  var _template = (!$route.current) ? 'home' : $route.current.templateUrl.toLowerCase();
  // console.log('TEMPLATE', _template);
  $scope.nav = {};

  $scope.nav.isHome = function(){return $route.current &&
    $route.current.templateUrl.toLowerCase().indexOf('home') !== -1};
  $scope.nav.isShow = function(){return $route.current &&
    $route.current.templateUrl.toLowerCase().indexOf('show') !== -1};
    
});

app.controller('HomeController', function($scope, $http) {
  $scope.view = {};
});

app.controller('ShowController', function($scope, $http) {
  $scope.view = {};
});

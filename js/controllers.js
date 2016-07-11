

app.controller('NavController', function($scope, $rootScope, $route, $routeParams, $location) {

  $scope.$route = $route;
  $scope.$location = $location;
  $scope.$routeParams = $routeParams;

  // get current route info
  console.log('ROUTE', $scope);
});

app.controller('HomeController', function($scope, $http) {
  $scope.view = {};

  // $http.get('https://api.github.com/zen').then(function(data){
  //   $scope.view.zenData = data.data;
  // });
  //
  //
  // $http.get('/itunes.json').then(function(data){
  //   console.log(data);
  //   $scope.view.jack = data.data.results;
  // })
  // .catch(function(err){
  //   $scope.view.jack = err;
  // });

  $http.get('https://messagehttpservice.herokuapp.com/messages')
  .then(function(data){
    $scope.view.msgData = data;
  })
  .catch(function(err){
    $scope.view.msgData = err;
  });




});

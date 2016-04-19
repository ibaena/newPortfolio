var mainCtrl = angular.module('mainCtrl', ['ngAnimate']);

//SIDENAV CONTROLLER TO HANDLE LOGIC FOR TOGGLING VIEW
mainCtrl.controller('sideNavCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.showNav = false;
  $scope.activeNav = function() {
    $scope.showNav = !$scope.showNav;
  };
}]);

//SHOWCASE CONTROLLER
mainCtrl.controller('showCaseCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('public/js/projects.json').then(function(data) {
    $scope.projects = data.data;
  });
  $scope.showLanguage = function(title) {
    $scope.query = title;
  };
}]);

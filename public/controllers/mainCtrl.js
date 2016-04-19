var mainCtrl = angular.module('mainCtrl', ['ngAnimate']);

//SIDENAV CONTROLLER TO HANDLE LOGIC FOR TOGGLING VIEW
mainCtrl.controller('sideNavCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.showNav = false;
  $scope.activeNav = function() {
    console.log('hey');
    $scope.showNav = !$scope.showNav;
  };
}]);

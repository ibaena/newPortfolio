var mainCtrl = angular.module('mainCtrl', ['ngAnimate']);

//SIDENAV CONTROLLER TO HANDLE LOGIC FOR TOGGLING VIEW
mainCtrl.controller('sideNavCtrl', ['$scope', '$http','$timeout', function($scope, $http, $timeout) {
  $scope.fadeInContent = false;
  $scope.fadeOutContent = true;
  $scope.showNav = false;
  $scope.activeNav = function() {
    $scope.showNav = !$scope.showNav;
    $scope.fadeInContent = !$scope.fadeInContent;
  };
}]);

//SHOWCASE CONTROLLER
mainCtrl.controller('showCaseCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.fadeInProject = false;
  $http.get('public/js/projects.json').then(function(data) {
    $scope.projects = data.data;
  });
  $scope.showLanguage = function(title) {
    $scope.query = title;
    $scope.fadeInProject = !$scope.fadeInProject;
  };
}]);

//ABOUT CONTROLLER
mainCtrl.controller('CarouselCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('public/js/about.json').then(function(data) {
    $scope.about = data.data;
    console.log($scope.about);
  });
}]);

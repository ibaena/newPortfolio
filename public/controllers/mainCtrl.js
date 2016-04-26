var mainCtrl = angular.module('mainCtrl', ['ngAnimate']);

//SIDENAV CONTROLLER TO HANDLE LOGIC FOR TOGGLING VIEW
mainCtrl.controller('sideNavCtrl', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {
  $scope.fadeInContent = false;
  $scope.fadeOutContent = true;
  $scope.showNav = true;
  $scope.activeNav = function() {
    $scope.showNav = !$scope.showNav;
    $scope.fadeInContent = !$scope.fadeInContent;
  };
}]);

//SHOWCASE CONTROLLER
mainCtrl.controller('showCaseCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.animateSmallImg = false;
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

//CODING CONTROLLER
mainCtrl.controller('CodingCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('public/js/skills.json').then(function(data) {
    $scope.coding = data.data;
    console.log($scope.coding);

  });
  $scope.animateCoding = false;
  $scope.reveal = false;
  $scope.revealAnimate = true;
  $scope.revealCard = function($index) {
    $scope.reveal = !$scope.reveal;
    $scope.codingArray = $scope.coding[$index];
    $scope.cardPicked = $scope.codingArray;
  };
  $scope.animateFade = false;
  $scope.revertCard = function() {
    $scope.cardPicked = "";
    $scope.reveal = !$scope.reveal;
  };
}]);

//LANDING CONTROLLER
mainCtrl.controller('landingCtrl', ['$scope', '$http','$timeout', function($scope, $http, $timeout) {
  $timeout(function() {
    $scope.ghost = 'HEllO IVAN';
  }, 2500).then(function() {

  });
}]);

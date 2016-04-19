var Portfolio = angular.module('Portfolio', [
  'ui.router',
]);

Portfolio.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/views/partials/home.html',
      controller: ''
    });
});

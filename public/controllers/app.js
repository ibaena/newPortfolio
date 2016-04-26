var Portfolio = angular.module('Portfolio', [
  'ui.router',
  'mainCtrl'
]);

Portfolio.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/views/partials/home.html',
      controller: 'landingCtrl'
    })
    .state('profile', {
      url: '/profile',
      templateUrl: '/views/partials/profile.html',
      controller: 'CarouselCtrl'
    })
    .state('showcase', {
      url: '/showcase',
      templateUrl: '/views/partials/showcase.html',
      controller: 'showCaseCtrl'
    })
    .state('code', {
      url: '/code',
      templateUrl: '/views/partials/code.html',
      controller: 'CodingCtrl'
    });
});

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
      controller: 'sideNavCtrl'
    })
    .state('profile', {
      url: '/profile',
      templateUrl: '/views/partials/profile.html',
      controller: 'sideNavCtrl'
    })
    .state('showcase', {
      url: '/showcase',
      templateUrl: '/views/partials/showcase.html',
      controller: 'sideNavCtrl'
    })
    .state('code', {
      url: '/code',
      templateUrl: '/views/partials/code.html',
      controller: 'sideNavCtrl'
    })
    .state('message', {
      url: '/message',
      templateUrl: '/views/partials/message.html',
      controller: 'sideNavCtrl'
    });
});

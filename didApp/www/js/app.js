var didApp = angular.module('didApp', ['ionic','angularMoment','didApp.controllers','didApp.service'])

didApp.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

didApp.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
      .state('login',{
        url:'/',
        templateUrl:'templates/login.html',
        controller:'MainCtrl'
      })
      .state('weekProgress',{
        url:'/weekProgress',
        templateUrl:'templates/weekProgress.html',
        controller:'weekProgressCtrl',
        params : {currentWeekNumber : '',
                  currentYearNumber : ''}
      })
      .state('dayProgress',{
        url:'/dayProgress',
        templateUrl:'templates/dayProgress.html',
        controller:'dayProgressCtrl'
      })
      .state('projectProgress',{
        url:'/projectProgress',
        templateUrl:'templates/projectProgress.html',
        controller:'projectProgressCtrl'
      })
      $urlRouterProvider.otherwise('/');
})

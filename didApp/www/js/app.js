var didApp = angular.module('didApp', ['ionic',
                                       'angularMoment',
                                       'didApp.weekProgressController',
                                       'didApp.loginController',
                                       'didApp.dayProgressController',
                                       'didApp.projectProgressController',
                                       'didApp.service'])

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
        templateUrl:'didApp/login/login.html',
        controller:'loginCtrl'
      })
      .state('weekProgress',{
        url:'/weekProgress',
        templateUrl:'didApp/weekProgress/weekProgress.html',
        controller:'weekProgressCtrl',
        params : {currentWeekNumber : '',
                  currentYearNumber : ''}
      })
      .state('dayProgress',{
        url:'/dayProgress',
        templateUrl:'didApp/dayProgress/dayProgress.html',
        controller:'dayProgressCtrl'
      })
      .state('projectProgress',{
        url:'/projectProgress',
        templateUrl:'didApp/projectProgress/projectProgress.html',
        controller:'projectProgressCtrl'
      })
      $urlRouterProvider.otherwise('/');
})

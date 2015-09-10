angular.module('didApp.controllers', [])

.controller('MainCtrl',['$scope',MainCtrl])
.controller('weekProgressCtrl',['$scope',weekProgressCtrl])
.controller('dayProgressCtrl',['$scope',dayProgressCtrl])

function MainCtrl($scope){
  console.log('MainCtrl');
};

function weekProgressCtrl($scope){
  console.log('weekProgressCtrl');
};
function dayProgressCtrl($scope){
  console.log('dayProgressCtrl');
};

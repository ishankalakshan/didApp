angular.module('didApp.controllers', ['angularMoment'])

.controller('MainCtrl',['$scope',MainCtrl])
.controller('weekProgressCtrl',['$scope','$stateParams','didAppDataService',weekProgressCtrl])
.controller('dayProgressCtrl',['$scope',dayProgressCtrl])
.controller('projectProgressCtrl',['$scope',projectProgressCtrl])

function MainCtrl($scope){

  $scope.currentWeekNumber = moment().format('WW');
  $scope.currentYearNumber = moment().format('YYYY');
};

function weekProgressCtrl($scope,$stateParams,didAppDataService){

  $scope.timesheet = [];
  $scope.weekStartend = getWeekStartEnd($stateParams.currentWeekNumber,$stateParams.currentYearNumber);
  console.log($scope.weekStartend);




  $scope.$on('didApp.didmobiledata',function(_,result){
    result.feed.entry.forEach(function(b){
      $scope.timesheet.push({
          id:b.content.properties.Id.__text,
          title:b.content.properties.Title.__text,
          startTime:b.content.properties.PzlStartTime.__text,
          endTime:b.content.properties.PzlEndTime.__text,
          duration:b.content.properties.PzlDurationHours.__text,

          timezone:b.content.properties.PzlTimeZone.__text,
          description:b.content.properties.PzlDescription.__text,
          state:b.content.properties.PzlState.__text,
          category:b.content.properties.PzlCategory.__text,
          location:b.content.properties.PzlLocation.__text,

          organizer:b.content.properties.PzlOrganizer.__text,
          customerKeyId:b.content.properties.PzlCustomerKeyId.__text,
          resourceKeyId:b.content.properties.PzlResourceKeyId.__text,
          dateImported:b.content.properties.PzlDateImported.__text,
          lastUpdatedOn:b.content.properties.PzlLastUpdatedOn.__text,

          sourceSystemId:b.content.properties.PzlSourceSystemId.__text,
          weekNumber:b.content.properties.PzlWeekNumber.__text,
          yearNumber:b.content.properties.PzlYearNumber.__text,
          modified:b.content.properties.Modified.__text,
          created:b.content.properties.Created.__text
      });
    });
  });

  didAppDataService.loadData();

  function getWeekStartEnd(weekNumber,yearNumber){
      var weekStartEnd = {
        weekNumber : weekNumber,
        weekStart : moment(weekNumber+yearNumber,'WWYYYY').startOf('isoWeek').format('MMM, dddd DD'),
        weekEnd : moment(weekNumber+yearNumber,'WWYYYY').endOf('isoWeek').day(-2).format('MMM, dddd DD')
      };
    return weekStartEnd;
  };

  $scope.getDate = function(){
    $scope.weekStartend = getWeekStartEnd('38','2014');
  };


};//end of weekProgressCtrl
function dayProgressCtrl($scope){
  console.log('dayProgressCtrl');
};
function projectProgressCtrl(){
  console.log('projectProgressCtrl');
};

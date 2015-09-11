angular.module('didApp.weekProgressController', ['angularMoment'])

.controller('weekProgressCtrl',['$scope','$stateParams','didAppDataService',weekProgressCtrl])

function weekProgressCtrl($scope,$stateParams,didAppDataService){

  $scope.timesheet = [];
  $scope.weeklyTimesheet = [];
  $scope.weekCount = $stateParams.currentWeekNumber*1;
  $scope.yearCount = $stateParams.currentYearNumber*1;
  $scope.weekStartend = getWeekStartEnd($scope.weekCount,$scope.yearCount);

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
        weekStart : moment(String(weekNumber)+ yearNumber,'WWYYYY').startOf('isoWeek').format('MMM, dddd DD'),
        weekEnd : moment(String(weekNumber)+yearNumber,'WWYYYY').endOf('isoWeek').day(-2).format('MMM, dddd DD')
      };
    return weekStartEnd;
  };
  $scope.getWeeklyTimesheet = function(weekNumber,yearNumber){
      for (i = 0; i < $scope.timesheet.length; i++) {
              if ($scope.timesheet[i].weekNumber==weekNumber&&$scope.timesheet[i].yearNumber==yearNumber) {
                  console.log($scope.timesheet[i]);
              }
        }
  };
  $scope.addOneWeek =function(){
    $scope.weekCount += 1;
    $scope.weekStartend = getWeekStartEnd($scope.weekCount,$scope.yearCount);
    console.log($scope.weekStartend);
  };
  $scope.substractOneWeek =function(){
    $scope.weekCount -= 1;
    $scope.weekStartend = getWeekStartEnd($scope.weekCount,$scope.yearCount);
    console.log($scope.weekStartend);
  };



};//end of weekProgressCtrl

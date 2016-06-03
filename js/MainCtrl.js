angular.module('Marvelapp').controller('MainCtrl', function($scope, dataService) {

$scope.avengersArray = dataService.getData();
console.log($scope.avengersArray);

var avenger = {
  name:"Iron Man",
  height:'6ft',
  power:"mad robot skillz"
}

avenger.name


});

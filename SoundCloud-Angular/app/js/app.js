'use strict';
angular.module('myApp', ['ngRoute']);

angular.module('myApp').models = {};
angular.module('myApp').controller('myController',function($scope){
  $scope.data = 3;
});

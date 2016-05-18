'use strict';
angular.module('myApp', ['ngRoute']);

angular.module('myApp').models = {};

angular.module('myApp').config(function($routeProvider){
            $routeProvider.when('/test',{
              templateUrl:"searchYout.html",
              controller:"PlaylistController"
            })
          });

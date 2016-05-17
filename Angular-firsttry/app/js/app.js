'use strict';
var app = angular.module('myApp',['ngRoute']);
app.config(function($routeProvider){
            $routeProvider.when('/test',{
              templateUrl:"searchYout.html",
              controller:"PlaylistController"
            })
          });

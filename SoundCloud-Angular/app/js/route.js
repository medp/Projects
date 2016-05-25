(function(){
  'use strict'
angular.module('myApp').config(function($routeProvider){
            $routeProvider.when('/playlist',{
              templateUrl:"templates/playlistTmpl.html",
              controller:"PlaylistController",
              controllerAs:"playlistCtrl",
              resolve:{
                getDataPlaylist: function(servicePlaylist){
                  return servicePlaylist.dataService();
                }
              }
            });
            $routeProvider.otherwise({redirectTo:'/playlist'});
  });
})();

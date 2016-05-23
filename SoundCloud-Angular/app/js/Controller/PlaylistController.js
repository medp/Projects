(function(){
'use strict';
  var models = angular.module('myApp').models;
  angular.module('myApp').controller('PlaylistController',PlaylistController);

  // PlaylistController.$inject=['playlistRepo','$scope'];
  PlaylistController.$inject=['servicePlaylist','$scope'];


  function PlaylistController(servicePlaylist,$scope){

    activate();
    function activate(){
        return servicePlaylist.dataService().then(function(data){
            $scope.playlists = data;
        });

    }
  }

})();


// servicePlaylist.dataService(ctrl.playlists);

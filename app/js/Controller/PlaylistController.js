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
      // return playlistRepo.getData().then(
      //   function(data){
      //     $scope.playlists = data.data.map(function(playlist){
      //       return new models.Playlist(playlist);
      //     });
      //   });
    }
  }

})();


// servicePlaylist.dataService(ctrl.playlists);

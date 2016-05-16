'use strict';

app.controller('PlaylistController',
  function PlaylistController($scope,playlistRepo){
    $scope.playlist = 
    $scope.event = playlistRepo.getData();

      // $scope.playlists = data.map(function(playlist) {
      //   return new $scope.playlist(playlist);
      // })
  $scope.picture="/../../img/dots.png";
});

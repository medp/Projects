(function(myApp){
'use strict';


angular.module('myApp').controller('PlaylistController',
  function($scope,$log,playlistRepo){
    playlistRepo.getData().then(
      function(data){
        $scope.playlists = data.map(function(playlist){
          return new Playlist(playlist);
        });
      }
    );

    function Playlist(data){
      this.title = data.title;
      this.picture = (data.tracks[0] || " ").artwork_url || "/img/like.png" ;
      this.tracks= data.tracks.map(function(val){
          return new Song(val);
        });
    }
    function Song(data){
      this.songTitle = data.title;
      this.pictureSong = data.artwork_url;
    }
  });
})(app);

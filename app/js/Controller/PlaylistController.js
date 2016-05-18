(function(){
'use strict';
  var models = angular.module('myApp').models;
  angular.module('myApp').controller('PlaylistController',PlaylistController);

  PlaylistController.$inject=['playlistRepo','$scope'];
  function PlaylistController(playlistRepo,$scope){

  }


    // function Playlist(data){
    //   this.title = data.title;
    //   this.picture = (data.tracks[0] || " ").artwork_url || "/img/like.png" ;
    //   this.tracks= data.tracks.map(function(val){
    //       return new Song(val);
    //     });
    // }
    // function Song(data){
    //   this.songTitle = data.title;
    //   this.pictureSong = data.artwork_url;
    // }
})();

var ctrl=this;
ctrl.playlists = [];
servicePlaylist.dataService(ctrl.playlists);
// playlistRepo.getData().then(
//   function(data){
//     $scope.playlists = data.data.map(function(playlist){
//       return new models.Playlist(playlist);
//     });
//   });

'use strict';

app.controller('PlaylistController',
  function PlaylistController($scope,$log,playlistRepo){

   playlistRepo.getData().then(
     function(data){
       $scope.playlists = data.map(function(playlist){
         return new Playlist(playlist);
       });
     }
   );
   $scope.messages=[
     {text:"Standard Message"},
      {text:"Success Message!", type:"success"},
      {text:"Alert Message!", type : "alert"},
      {text:"secondary message...", type : "secondary"}
   ];

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

      // $scope.playlists = data.map(function(playlist) {
      //   return new $scope.playlist(playlist);
      // })
  $scope.picture="/../../img/dots.png";
});

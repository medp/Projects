(function(){
  'use strict'
  angular.module('myApp').models.Playlist = Playlist;
  var models = angular.module('myApp').models;
  function Playlist (playlist) {
      this.title = playlist.title;
      this.picture = (playlist.tracks[0] || " ").artwork_url || "../img/like.png" ;
      this.tracks= playlist.tracks.map(function(song){
          return new models.Song(song);
      });
      return this;
  };
})();

// (function(){
//   'use strict'
//
//   angular.module('myApp').factory('Playlist', Playlist);
//   Playlist.$inject =['Song'];
//
// function Playlist (Song){
//     function PlaylistModel(data){
//       this.title = data.title;
//       this.picture = (data.tracks[0] || " ").artwork_url || "../img/like.png" ;
//       this.tracks= data.tracks.map(function(val){
//           return Song.setSong(val);
//         });
//     }
//     return {
//       setPlaylist:function(dataSet){
//         return new PlaylistModel(dataSet);
//       }
//     }
//   };
// })();

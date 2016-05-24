(function(){
  'use strict'
  angular.module('myApp').models.Playlist = Playlist;
  var models = angular.module('myApp').models;
  function Playlist (playlist) {
      this.title = playlist.title;
      this.picture = (playlist.tracks[0] || " ").artwork_url || "http://localhost:8080/img/mail.png" ;
      this.tracks= playlist.tracks.map(function(song){
          return new models.Song(song);
      });
      return this;
  };
})();

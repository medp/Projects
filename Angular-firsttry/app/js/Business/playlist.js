(function(){
  'use strict'
  app.controller('Playlist',function(data){
    this.title = data.title;
    this.picture = (data.tracks[0] || " ").artwork_url || "View/images/like.png" ;
    this.tracks= data.tracks.map(function(val){
        return new ctx.business.Song(val);
      });
  }
  ctx.business.Playlist = Playlist;

);
})();

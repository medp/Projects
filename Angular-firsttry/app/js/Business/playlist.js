
  function Playlist(data){
    this.title = data.title;
    this.picture = (data.tracks[0] || " ").artwork_url || "/img/like.png" ;
    this.tracks= data.tracks.map(function(val){
        return new Song(val);
      });
  }

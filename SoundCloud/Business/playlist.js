
function Playlist(data){
  this.title = data.title;
  this.picture = data.user.avatar_url ;
  this.tracks= data.tracks.map(function(val){
      return new Song(val);
    });

}

Playlist.prototype.picture = "../View/images/like.png";

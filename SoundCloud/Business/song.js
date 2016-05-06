(function(context){
  'use strict';

  function Song(data){
    this.songTitle = data.title;
    this.pictureSong = data.artwork_url;
  }
  context.business.Song = Song;
})(myApp);

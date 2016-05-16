'use strict'

app.factory('playlistService',function(playlistRepo){
  return {
    playlistRepo.getData().then(function(data){
        return data.map(function(playlist) {
          return new Playlist(playlist);
        });
    });
    // playlistRepo(getWithSuccess,getWithError);
})

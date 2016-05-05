(function(ctx) {
  'use strict';
  function getPlaylist(cbSuccess, cbError) {
    function getWithSuccess(data) {
      var playlists;
      playlists =JSON.parse(data).map(function(playlist) {
          return new ctx.business.Playlist(playlist);
      });
      cbSuccess(playlists);
    }
    function getWithError(data) {
      cbError(data);
    }
    ctx.repo.getPlaylist(getWithSuccess, getWithError);
  }

  ctx.service.getPlaylist = getPlaylist;
})(myApp);


(function(context,jQ) {
  'use strict';

  
  function genericRepository (url, cbSuccess, cbError) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        cbSuccess(xhttp.responseText);
      } else {
        if (!!xhttp.status && xhttp.status !== 200) {
          cbError(xhttp.responseText);
        }
      }
    };
    xhttp.open("GET", url , true);
    xhttp.send();
  };


  function getPlaylist(cbSuccess, cbError) {
    var url = "https://api.soundcloud.com/playlists?client_id=02gUJC0hH2ct1EGOcYXQIzRFU91c72Ea"
    return genericRepository(url, cbSuccess, cbError);
  }

  context.repo.getPlaylist = getPlaylist;
})(myApp,jQuery);

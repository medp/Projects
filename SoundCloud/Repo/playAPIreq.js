function fromJSON(xhttp) {
  parsed=JSON.parse(xhttp.responseText).map(function(playlist){
    return playlist;
  });
  playlists =JSON.parse(xhttp.responseText).map(function(playlist) {
      return new Playlist(playlist);
  });
  console.log(parsed);
  console.log(playlists);
 display(playlists);
}
(function(cfunc) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      cfunc(xhttp);
    }
  };
  xhttp.open("GET", "https://api.soundcloud.com/playlists?client_id=02gUJC0hH2ct1EGOcYXQIzRFU91c72Ea", true);
  xhttp.send();
})(fromJSON);

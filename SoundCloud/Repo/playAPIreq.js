(function() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.getElementById("demo").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "http://api.soundcloud.com/playlists/405726?client_id=02gUJC0hH2ct1EGOcYXQIzRFU91c72Ea", true);
  xhttp.send();
})();

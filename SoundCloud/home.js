var myApp = {};
myApp.repo = {};
myApp.service = {};
myApp.business = {};
myApp.vm = {};

(function(ctx) {
  function init(){
    ctx.service.getPlaylist(
      ctx.vm.playlistVM.display,
      function() {
        alert('Error');
      });
  }
  // initialize APP
  window.addEventListener('load', init);

  // window.onclick = function(event) {
  //   if (!event.target.matches('.dropbtn')) {
  //
  //     var dropdowns = document.getElementsByClassName("dropdown-content");
  //     var i;
  //     for (i = 0; i < dropdowns.length; i++) {
  //       var openDropdown = dropdowns[i];
  //       if (openDropdown.classList.contains('show')) {
  //         openDropdown.classList.remove('show');
  //       }
  //     }
  //   }
  // }


  // function fromJSON(xhttp) {
  //   parsed=JSON.parse(xhttp.responseText).map(function(playlist){
  //     return playlist;
  //   });
  //   playlists =JSON.parse(xhttp.responseText).map(function(playlist) {
  //       return new Playlist(playlist);
  //   });
  //  display(playlists);
  // }


})(myApp);


var myApp = {};
myApp.repo = {};
myApp.service = {};
myApp.business = {};
myApp.vm = {};

(function(ctx,jQ) {

  function init(){
    ctx.service.getPlaylist(
      ctx.vm.playlistVM.display,
      function() {
        alert('Error');
      });
  }
  // initialize APP
  window.addEventListener('load', init);
  jQ(document).ready(function(){
    jQ("#drop").click(function(){
      jQ("#myDropdown").toggle();
    });
  });

})(myApp,jQuery);

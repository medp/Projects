(function(ctx){

  function display(array){
    var l=0;
    $("#content").loadTemplate($("#template-playlist"),array);
    $(".elemplaylist-container").each(function(){
      var dataSong = array[l++].tracks ;
      var i = 0;
      $(this).loadTemplate($("#template-song"),dataSong.filter(function(data,i){if(i<5) return data;}),{append:true});
      $(this).loadTemplate($("#template-vtracks"),{},{append:true});
    });
        console.log(array);
        dispTracks(array);
    }

  function dispTracks(array){
    var l= array.length;
    for(var i=0;i<l;i++){
      console.log(array[i].tracks);
    }
  }

  ctx.vm.playlistVM = {};
  ctx.vm.playlistVM.display = display;
})(myApp);

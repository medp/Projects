function display(array){
  $("#content-playlists").loadTemplate($("#template-playlist"),array);
}

(function(){
for(var i= 0;i< 3;i++){
$("#elements").loadTemplate($("#template-song"),
  {
    index:i+1,
    title:'Feel',
    songTitle:'song',
    pictureSong:"",
  },{append:true});
}
})();

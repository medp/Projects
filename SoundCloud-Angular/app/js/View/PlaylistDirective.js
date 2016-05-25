(function(){
angular.module('myApp').directive('mpPlayList', playlistTmpl);

function playlistTmpl(){
  var directive = {
    templateUrl: "/templates/dataPlaylist.html",
    restrict: "EA"
  };
  return directive;
};
})();

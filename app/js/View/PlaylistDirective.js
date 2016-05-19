(function(){
angular.module('myApp').directive('playlistTmpl', playlistTmpl);

function playlistTmpl(){
  var directive = {
    templateUrl: "/templates/playlistTmpl.html",
    restrict: "EA"
  };
  return directive;
};
})();

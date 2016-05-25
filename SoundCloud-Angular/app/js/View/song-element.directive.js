(function(){
angular.module('myApp').directive('songEl', songCont);

function songCont(){
  var directive = {
    templateUrl: "/templates/songTemplate.html",
    restrict: "EA"
  };
  return directive;
}
})();

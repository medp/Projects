(function(){
angular.module('myApp').directive('asideCont', asideCont);

function asideCont(){
  var directive = {
    templateUrl: "/templates/aside.html",
    restrict: "EA"
  };
  return directive;
}
})();

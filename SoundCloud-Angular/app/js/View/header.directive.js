(function() {
    angular.module('myApp').directive('pageHeader', pageHeader);

    function pageHeader() {
        var directive = {
            templateUrl: "templates/page-header.html",
            restrict: "EA"
        };
        return directive;
    }
})();

(function() {
    angular.module('myApp').directive('asideContent', asideContent);

    function asideContent() {
        var directive = {
            templateUrl: "templates/aside.html",
            restrict: "EA"
        };
        return directive;
    }
})();

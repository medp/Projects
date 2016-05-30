(function() {
    angular.module('myApp').directive('footerPlayer', footerPlayer);

    function footerPlayer() {
        var directive = {
            templateUrl: "templates/footer.html",
            restrict: "EA",
            controller: "footerController"
        };
        return directive;
    }
})();

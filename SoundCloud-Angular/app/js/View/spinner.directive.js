(function() {
    angular.module('myApp').directive('ppSpinner', ppSpinner);

    function ppSpinner() {
        var directive = {
            templateUrl: "templates/spinner.html",
            restrict: "EA",
            controller: "SpinnerController",
            controllerAs: "spinner"
        };
        return directive;
    }
})();

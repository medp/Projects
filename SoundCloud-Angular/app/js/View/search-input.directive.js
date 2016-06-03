(function() {
    angular.module('myApp').directive('searchInp', searchInp);

    function searchInp() {
        var directive = {
            templateUrl: "templates/search-input.html",
            restrict: "EA",
            // controller: "SpinnerController",
            // controllerAs: "spinner"
        };
        return directive;
    }
})();

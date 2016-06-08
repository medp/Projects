(function() {
    angular.module('myApp').directive('searchInput', searchInput);

    function searchInput() {
        var directive = {
            templateUrl: "templates/search-input.html",
            restrict: "EA",
            controller: 'searchInputController',
            controllerAs: 'searchCtrl'
        };
        return directive;
    }
})();

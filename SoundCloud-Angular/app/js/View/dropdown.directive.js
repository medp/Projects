(function() {
    angular.module('myApp').directive('dropDown', dropDown);

    function dropDown() {
        var directive = {
            templateUrl: "templates/dropdown.html",
            restrict: "EA",
            controller: "dropdownController",
            controllerAs: "dropCtrl"
        };
        return directive;
    }
})();

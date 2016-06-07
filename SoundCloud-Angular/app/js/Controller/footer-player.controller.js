(function() {
    'use strict';

    angular.module('myApp').controller('footerController', footerController);

    footerController.$inject = ['$rootScope'];

    function footerController($rootScope) {
        var fm = this;

            $rootScope.togglePlayer = function() {
                $rootScope.toggle = $rootScope.toggle === true ? false : true;
            };
    }
})();

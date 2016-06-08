(function() {
    'use strict';

    angular.module('myApp').controller('searchInputController', searchInputController);

    searchInputController.$inject = ['serviceShareData'];

    function searchInputController(serviceShareData) {
        var vm = this;
        vm.search = serviceShareData;
    }
})();

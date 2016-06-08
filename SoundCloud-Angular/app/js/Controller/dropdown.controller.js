(function() {
    'use strict';

    angular.module('myApp').controller('dropdownController', dropdownController);

    function dropdownController() {
        var dropCtrl = this;
        dropCtrl.toggle = toggle;

        function toggle() {
            var myEl = angular.element(document.querySelector('#myDropdown'));
            myEl.toggleClass('show');
        }
    }
})();

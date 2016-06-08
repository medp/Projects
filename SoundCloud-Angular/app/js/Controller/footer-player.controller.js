(function() {
    'use strict';

    angular.module('myApp').controller('footerController', footerController);

    footerController.$inject = ['serviceShareSong'];

    function footerController(serviceShareSong) {
        var fm = this;
        fm.setSong = setSong;
        //
        // $rootScope.togglePlayer = function() {
        //     $rootScope.toggle = $rootScope.toggle === true ? false : true;
        // };
        function setSong() {
            fm.song = serviceShareSong.getSong();
            console.log("shared song", fm.song);
        }
    }
})();

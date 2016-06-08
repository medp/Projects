(function() {
    'use strict';

    angular.module('myApp').controller('SongController', SongController);

    SongController.$inject=['serviceShareSong'];

    function SongController(serviceShareSong) {
        var vm = this;
        vm.togglePlayer = togglePlayer;
        vm.show = false;

        function togglePlayer(song) {
            vm.song = song;
            console.log("data", vm.song);
            if (vm.show === false){
                vm.show = true;
                serviceShareSong.addItem(vm.song);
                console.log(vm.show);
          }  else {
                  vm.show = false;
                serviceShareSong.removeItem();
            }
        }

        function selectSong() {

        }
    }
})();

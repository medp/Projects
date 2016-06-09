(function() {
    'use strict';

    angular.module('myApp').controller('SongController', SongController);

    SongController.$inject = ['serviceShareSong'];

    function SongController(serviceShareSong) {
        var vm = this;
        vm.song = {
            show: false,
            item: '',
            index: ''
        };
        vm.togglePlayer = togglePlayer;
        function togglePlayer(song,index) {
            if (vm.song.show === false) {
                vm.song.item = song;
                vm.song.show = true;
                vm.song.index = index;
                serviceShareSong.addItem(vm.song);
                console.log(vm.song.show);
            } else if(vm.song.index != index){
                serviceShareSong.removeItem();
                vm.song.item = song;
                vm.song.show = true;
                vm.song.index = index;
                serviceShareSong.addItem(vm.song);
            } else{
                vm.song.show = false;
                serviceShareSong.removeItem();
            }
        }

        function selectSong() {

        }
    }
})();

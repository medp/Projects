(function() {
    'use strict';

    angular.module('myApp').controller('PlaylistController', PlaylistController);

    PlaylistController.$inject = ['playlistData'];


    function PlaylistController(playlistData) {
        var vm = this;
        vm.trackLimit = 5;
        vm.showTracks = showTracks;
        vm.remove = remove;
        activate();

        function activate() {
            vm.playlists = playlistData;
            vm.playlists.map(function(data) {
                data.trackLimit = 5;
                data.show = true;
                data.toggle = false;
                return data;
            })
        }

        function showTracks(p) {
            if (p.trackLimit === 5) {
                p.trackLimit = p.tracks.length;
                p.show = false;
            } else {
                p.trackLimit = 5;
                p.show = true;
            }
        }

        function remove(index) {
            vm.playlists.splice(index, 1); //remove
        }
        return vm;
    }
})();

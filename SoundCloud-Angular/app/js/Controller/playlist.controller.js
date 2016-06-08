(function() {
    'use strict';

    angular.module('myApp').controller('PlaylistController', PlaylistController);

    PlaylistController.$inject = ['playlistData', 'serviceShareData', '$rootScope'];


    function PlaylistController(playlistData, serviceShareData, $rootScope) {
        var vm = this;
        activate();

        function activate() {
            vm.playlists = playlistData;
            vm.search = serviceShareData;
            $rootScope.$emit('Loaded');
        }
    }
})();
// vm.playlists.map(function(data) {
//     data.trackLimit = 5;
//     data.show = true;
//     data.toggle = false;
//     return data;
// })
//
// function showTracks(p) {
//     if (p.trackLimit === 5) {
//         p.trackLimit = p.tracks.length;
//         p.show = false;
//     } else {
//         p.trackLimit = 5;
//         p.show = true;
//     }
// }
//
// function remove(index) {
//     vm.playlists.splice(index, 1); //remove
// }
// return vm;

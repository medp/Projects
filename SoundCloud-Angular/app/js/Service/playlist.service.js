(function() {
    'use strict';

    var models = angular.module('myApp').models;
    angular.module('myApp').factory('servicePlaylist', servicePlaylist);

    servicePlaylist.$inject = ['playlistRepo'];

    function servicePlaylist(playlistRepo) {

        function dataService() {
            return playlistRepo.getData()
                .then(function(resource) {
                    var listOfplaylists = resource.data.map(function(playlist) {
                        return new models.Playlist(playlist);
                    });
                    return listOfplaylists;
                });
        }

        return {
            dataService: dataService
        };
    }
})();

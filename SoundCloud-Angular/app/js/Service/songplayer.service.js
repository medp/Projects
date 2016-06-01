(function() {
    'use strict';


    angular.module('myApp').factory('serviceSong', serviceSong);

    serviceSong.$inject = ['servicePlaylist'];

    function serviceSong(servicePlaylist) {

        function getSongs() {
            return servicePlaylist.dataService()
                .then(function(data) {
                    var listOfSongs = data.map(function(playlist) {
                        return playlist.tracks;
                    });
                    return listOfSongs;
                });
        }
        return {
            getSongs: getSongs
        };
    }
})();

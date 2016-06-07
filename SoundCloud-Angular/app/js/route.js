(function() {
    'use strict'
    angular.module('myApp').config(function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: "templates/playlists-template.html",
            controller: "PlaylistController",
            controllerAs: "vm",
            resolve: {
                playlistData: function(servicePlaylist) {
                    return servicePlaylist.dataService();
                }
            }
        });
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    });
})();

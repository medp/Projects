 (function() {
    angular.module('myApp').directive('mpPlayList', mpPlayList);

    function mpPlayList() {
        var directive = {
            templateUrl: "templates/dataPlaylist.html",
            restrict: "EA",
            // controller: "PlaylistController",
            // controllerAs: "playlistCtrl"
            scope: {
              playlist: "=",
              removeEvent: "&"
            },
            link: function(scope, element, attrs, controller) {
              console.log(scope.playlist);
            }
        };
        return directive;
    };
})();

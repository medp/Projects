 (function() {
    angular.module('myApp').directive('mpPlayList', playlistTmpl);

    function playlistTmpl() {
        var directive = {
            templateUrl: "templates/dataPlaylist.html",
            restrict: "EA"
            // controller: "PlaylistController",
            // controllerAs: "playlistCtrl"
            // scope:{
            //   playlist: "="
            // }
        };
        return directive;
    };
})();

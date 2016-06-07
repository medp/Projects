 (function() {
    angular.module('myApp').directive('mpPlayList', mpPlayList);

    function mpPlayList() {
        var directive = {
            templateUrl: "templates/mp-playlist.html",
            restrict: "EA",
            controller:"MpPlaylistController",
            controllerAs: 'mpControl',
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

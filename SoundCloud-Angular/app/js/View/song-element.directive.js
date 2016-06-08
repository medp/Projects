(function() {
    angular.module('myApp').directive('songEl', songCont);

    function songCont() {
        var directive = {
            restrict: "EA",
            controller: "SongController",
            controllerAs: "SongCtrl",
            // bindToController: true,
            scope: {
                limit: '=',
                songs: '='
            },
            templateUrl: "templates/song-element.html",
            link: function(scope, element, attrs) {
                console.log('test songs ', scope.songs);
                console.log('bla', scope.limit);
            }

        };
        return directive;
    }
})();

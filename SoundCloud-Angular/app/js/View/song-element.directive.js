(function() {
    angular.module('myApp').directive('songEl', songCont);

    function songCont() {
        var directive = {
            restrict: "EA",
            controller: "SongController",
            controllerAs: "SongCtrl",
            bindToController: true,
            scope:{
              myIndex: '=',
              mySongs: '='
            },
            templateUrl: "templates/songTemplate.html",
             link: function(scope, element, attrs){
               console.log('test', attrs.index);

               scope.myIndex = attrs.index;
               scope.mySongs = attrs.songs;
               console.log('test2', scope.myIndex);
               console.log('test songs ', scope.mySongs );
             }

        };
        return directive;
    }
})();

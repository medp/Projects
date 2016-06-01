(function() {
    'use strict';

    angular.module('myApp').controller('SongController', SongController);

    SongController.$inject = ['serviceSong', '$rootScope'];


    function SongController(serviceSong, $rootScope) {
        var vm = this;
        vm.trackLimit = 5;

        resolve();

        function resolve(){
          serviceSong.getSongs().then(function(data){
            vm.songs = data;
          });
          $rootScope.$emit('Loaded');
        }

        function activate() {

            // vm.songs.map(function(data) {
            //     data.trackLimit = 5;
            //     data.show = true;
            //     data.toggle = false;
            //     return data;
            // })
            // $rootScope.$emit('Loaded');
        }

        // function showTracks(p) {
        //     if (p.trackLimit === 5) {
        //         p.trackLimit = p.tracks.length;
        //         p.show = false;
        //     } else {
        //         p.trackLimit = 5;
        //         p.show = true;
        //     }
        // }

    }
})();

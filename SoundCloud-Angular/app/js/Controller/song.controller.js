(function() {
    'use strict';

    angular.module('myApp').controller('SongController', SongController);

    SongController.$inject = ['serviceSong', '$rootScope'];


    function SongController(serviceSong, $rootScope) {
        var vm = this;
        vm.trackLimit = 5;

        resolve();
        $rootScope.$emit('Loaded');

        function resolve() {
            serviceSong.getSongs().then(function(data) {
                vm.songs = data;
            });

        }

    }
})();

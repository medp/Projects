(function() {
    'use strict';

    angular.module('myApp').controller('SongController', SongController);

    function SongController() {
        var vm = this;
        vm.togglePlayer = togglePlayer;
        vm.show = false;
        function togglePlayer(){
          if( vm.show === false )
            vm.show = true ;
          else{
            vm.show = false;
          }
        }
    }
})();

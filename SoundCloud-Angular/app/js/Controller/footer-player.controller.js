(function() {
    'use strict';

    angular.module('myApp').controller('footerController', footerController);

    footerController.$inject = ['serviceShareSong','$scope'];

    function footerController(serviceShareSong,$scope) {
        var fm = this;
        // fm.setSong = setSong;
        //
        // $rootScope.togglePlayer = function() {
        //     $rootScope.toggle = $rootScope.toggle === true ? false : true;
        // };
          $scope.$on('messageAdded', function () {
            fm.song = serviceShareSong.getSong();
            console.log("shared song", fm.song);
          });

    }
})();

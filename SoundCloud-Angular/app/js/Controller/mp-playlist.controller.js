(function() {
    'use strict';

    angular.module('myApp').controller('MpPlaylistController', mpController);
    // $scope.search = ;
    function mpController() {
        var mpControl = this;
        mpControl.trackLimits = [];
        mpControl.trackLimit = 5;
        mpControl.showTracks = showTracks;
        mpControl.verif = verif;

        // function verif(l,index){
        //   if(l>5){
        //     return true;
        //   }
        //   return false;
        // }

        function showTracks(val, index) {
            console.log(val);
            if (mpControl.trackLimits[index] === 5 || mpControl.trackLimits[index] === undefined) {
                console.log(index);
                mpControl.trackLimits[index] = val;
            } else {
                mpControl.trackLimits[index] = 5;
            }
        }
    }
})();

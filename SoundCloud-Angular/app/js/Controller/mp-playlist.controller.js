(function() {
    'use strict';

    angular.module('myApp').controller('MpPlaylistController', mpController);

    mpController.$inject = ['serviceShareData'];

    function mpController(serviceShareData) {
        var mpControl = this;
        // mpControl.search = serviceShareData;
        mpControl.trackLimits = [];
        mpControl.trackLimit = 5;
        mpControl.showTracks = showTracks;

        function showTracks(val, index) {
            // console.log(mpControl.trackLimits[index]);
            if (mpControl.trackLimits[index] === 5 || mpControl.trackLimits[index] === undefined) {
                // console.log("index",index);
                mpControl.trackLimits[index] = val;
                // console.log("max track",mpControl.trackLimits[index]);
            } else {
                mpControl.trackLimits[index] = 5;
                // console.log(mpControl.trackLimits[index]);
            }
        }
    }
})();

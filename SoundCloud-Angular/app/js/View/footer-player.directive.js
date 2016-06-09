(function() {
    angular.module('myApp').directive('footerPlayer', footerPlayer);

    function footerPlayer() {
        var directive = {
            templateUrl: "templates/footer.html",
            restrict: "EA",
            controller: 'footerController',
            controllerAs:'fm'
            // scope: {
            //     show: "=",
            //     song: "="
            // },
            // link: function(scope, element, attrs) {
            //     // console.log('test songs ', scope.song );
            //     // console.log('bla', scope.song);
            //     //  console.log(scope.myIndex);
            // }
        };
        return directive;
    }
})();

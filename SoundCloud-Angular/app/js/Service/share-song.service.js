(function() {
    'use strict';

    angular.module('myApp').factory('serviceShareSong', serviceShareSong);

    serviceShareSong.$inject = ['$rootScope'];

    function serviceShareSong($rootScope) {
        var list = [];

        return {
            addItem: addItem,
            removeItem: removeItem,
            getSong: getSong
        };

        function addItem(item) {
            if(list.length!=0){
              console.log('NONO');
              list.pop();
            }
            list.push(item);
            console.log(list);
            $rootScope.$broadcast('messageAdded');
        }

        function getImage(){
          // "/img/play.png"
        }
        function removeItem() {
            list.pop();
            console.log(list);
        }
        function getSong(){
          return list[0];
        }
    }
})();

(function() {
    'use strict';

    angular.module('myApp').factory('serviceShareSong', serviceShareSong);

    // serviceShareData.$inject = ['playlistRepo'];

    function serviceShareSong() {
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

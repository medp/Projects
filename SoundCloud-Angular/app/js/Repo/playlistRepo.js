
(function(){
'use strict';

angular.module('myApp').factory('playlistRepo', playlistRepo);

playlistRepo.$inject=['$http'];
function playlistRepo($http) {
   var type={};
    return {
      getData: function() {
        return $http.get("https://api.soundcloud.com/playlists?client_id=02gUJC0hH2ct1EGOcYXQIzRFU91c72Ea");
      },
      getMonth: function(){
        return
      }
    };
  }
})();

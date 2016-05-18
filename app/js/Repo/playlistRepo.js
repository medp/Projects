
(function(){
'use strict';

angular.module('myApp').factory('playlistRepo', function($http) {
   var type={};
    return {
      getData: function() {
        return $http.get("https://api.soundcloud.com/playlists?client_id=02gUJC0hH2ct1EGOcYXQIzRFU91c72Ea");
      }
    };
  });
})();

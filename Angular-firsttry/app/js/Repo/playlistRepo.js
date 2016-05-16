'use strict';

app.factory('playlistRepo',function($http,$log,$q){
  return{
    getData:function(){
      var deferred = $q.defer();
      $http.get("https://api.soundcloud.com/playlists?client_id=02gUJC0hH2ct1EGOcYXQIzRFU91c72Ea").
          success(function(data, status ,headers, config){
             deferred.resolve(data);
          }).
          error(function(data, status){
            $log.warn(status);
            deferred.reject(status);
          });
      return deferred.promise;
    }
  }

})

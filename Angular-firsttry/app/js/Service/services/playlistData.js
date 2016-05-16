myApp.factory('playlistData', function(){
  return {
    getData:function(){
      $http.get("https://api.soundcloud.com/playlists?client_id=02gUJC0hH2ct1EGOcYXQIzRFU91c72Ea").
                succes(function(response){
                    $scope.name=response.data[0].title;
                }).
                error(function(){

                });
    }
  };
});

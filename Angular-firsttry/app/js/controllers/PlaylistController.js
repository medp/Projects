'use strict';

app.controller('PlaylistController',
  function PlaylistController($scope,$http){
  $http.get("https://api.soundcloud.com/playlists?client_id=02gUJC0hH2ct1EGOcYXQIzRFU91c72Ea").then(function(response){
    $scope.name=response.data[0].title;
  });
  $scope.name = "dana";
});

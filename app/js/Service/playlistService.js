(function(){
  'use strict';

  var models = angular.module('myApp').models;
  angular.module('myApp').factory('servicePlaylist',servicePlaylist);

  servicePlaylist.$inject=['playlistRepo'];
  function servicePlaylist(playlistRepo){

    function dataService(listOfPlaylists){
      return playlistRepo.getData()
                    .then(function(resource){
                      listOfplaylists = resource.data.map(function(playlist){
                                        return new models.Playlist(playlist);
                                      });
                          });
    }

    return {
      dataService: dataService
    };
  }
})();

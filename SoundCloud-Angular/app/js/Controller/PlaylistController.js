(function(){
'use strict';
  var models = angular.module('myApp').models;
  angular.module('myApp').controller('PlaylistController',PlaylistController);

  PlaylistController.$inject=['getDataPlaylist','$rootScope'];


  function PlaylistController(getDataPlaylist,$rootScope){
    var vm = this;
    vm.trackLimit = 5;
    vm.showTracks = showTracks;

    activate();
    function activate(){
        vm.playlists = getDataPlaylist;
        vm.playlists.map(function(data){
            data.trackLimit = 5;
            data.show = true;
            data.toggle = false;
            return data;
        })
        $rootScope.$emit('Loaded');
   }

   function showTracks(p){
      if(p.trackLimit===5) {
        p.trackLimit= p.tracks.length;
        p.show = false;
      }else{
        p.trackLimit = 5;
        p.show = true;
      }
    }

  }
})();

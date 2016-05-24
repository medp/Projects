(function(){
'use strict';
  var models = angular.module('myApp').models;
  angular.module('myApp').controller('PlaylistController',PlaylistController);

  PlaylistController.$inject=['getDataPlaylist'];


  function PlaylistController(getDataPlaylist){
    var vm = this;
    vm.isLoading = true;
    vm.toggle = false;
    activate();
    function activate(){
        vm.playlists = getDataPlaylist;
        vm.isLoading = false;
   }
    vm.togglePlayer = function(){
      vm.toggle = true;
    };
  }
})();

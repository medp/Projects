"use strict";
var scope, _playlistData;

beforeEach(module('myApp'));

// beforeEach(function(){
//   module(function($provide) {
//       $provide.playlistData = [];
//   });
// });



describe("test controller", function() {
  beforeEach(inject(function($controller, $rootScope) {
      scope = $rootScope.$new();
      _playlistData = [];
      $controller('PlaylistController', {$scope: scope, playlistData: _playlistData});
  }));
    it("Add gives the correct result", function() {
        expect(scope.value).toBe(true);
    });
});

describe("test service",function() {
    it('should return',inject(function(playlistRepo){
      expect(3).toBe(3);
    }))
})

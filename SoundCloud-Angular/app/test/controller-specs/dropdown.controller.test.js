"use strict";
var scope, _playlistData;

beforeEach(module('myApp'));

describe("test dropdown controller", function() {
    var scope;
    beforeEach(function(){
      inject(function($controller,$rootScope) {
        scope = $rootScope.$new();
        $controller('dropdownController as dropCtrl',{
            $scope: scope
        });
    });
    spyOn(scope.dropCtrl, "toggle").and.callThrough();
    scope.dropCtrl.toggle();
  })
    it('should toggle', function() {
      expect(scope.dropCtrl.toggle()).toHaveBeenCalled();
    })
})

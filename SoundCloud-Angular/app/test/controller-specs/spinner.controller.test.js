"use strict";
var scope, _playlistData;

beforeEach(module('myApp'));

describe("test controller", function() {
    var rootScope;
    beforeEach(inject(function($controller, $rootScope) {
        rootScope = $rootScope.$new();
        $controller('SpinnerController', {
            $rootScope: rootScope
        });

    }));
    it('should respond to the resource loaded event', function() {
       rootScope.$emit('Loaded');
       expect(rootScope.isLoading).toBeTruthy();
    } )
});

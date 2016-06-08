"use strict"

beforeEach(module('myApp'));


describe("Playlist directive test", function() {
    var $compile, $rootScope, playlistElem, $controller, _playlistData;
    // beforeEach();
    beforeEach(function() {
        module("templates");
        inject(function(_$compile_, _$rootScope_, _$controller_) {
            $compile = _$compile_;
            $rootScope = _$rootScope_.$new();
            $controller = _$controller_;
            _playlistData = [{
                title: "Title",
                picture: "",
                tracks: [{
                    songTitle: "song",
                    pictureSong: ""
                }]
            }];
            $controller('PlaylistController as PlaylistCtrl', {
                $scope: $rootScope,
                playlistData: _playlistData
            });
        });
        playlistElem = getCompiledElem();
    });

    function getCompiledElem() {
        // Compile a piece of HTML containing the direct
        var element = $compile('<mp-play></mp-play>')($rootScope);
        // // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
        $rootScope.$digest();
        return element;
    }

    it('Should be defined', function() {
        expect(playlistElem).toBeDefined();
    });
    it('Contain image element ', function() {
        var imgElement = playlistElem.find('h4');
        // // Check that the compiled element contains the templated content
        expect(imgElement).toBeDefined();
        // expect(imgElement.html()).toContain("Playlist title:");
    });


});

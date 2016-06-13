describe("Test playlist controller", function() {
    var _playlistData;
    beforeEach(function() {
        _playlistData = [{
            title: "FirstPlaylist",
            picture: "img/mail.png",
            tracks: [{
                title: "Song1",
                artwork_url: "img/data.png"
            }, {
                title: "Song2",
                artwork_url: "img/mail.png"
            }, {
                title: "Song3",
                artwork_url: "img/mail.png"
            }]
        }, {
            title: "SecondPlaylist",
            picture: "img/mail.png",
            tracks: [{
                title: "Song1",
                artwork_url: "img/mail.png"
            }]
        }, {
            title: "Playlist3",
            picture: "",
            tracks: []
        }];
        _searchData = {
            title: "SearchTitle"
        }
        inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            $controller('PlaylistController as vm', {
                $scope: scope,
                playlistData: _playlistData,
                serviceShareData: _searchData,
                $rootScope: scope
            });
        })
    });
    it("Should have the playlists variable defined", function() {
        expect(scope.vm.playlists).toBeDefined();
    });
    it("Should have the correct title for playlist element", function() {
        expect(scope.vm.playlists[0].title).toBe("FirstPlaylist");
    })
    it("Should receive the correct search item", function() {
        expect(scope.vm.search).toEqual({
            title: "SearchTitle"
        });
    })
    it("", function() {
            spyOn(scope, '$emit');
            scope.$emit('Loaded');
            expect(scope.$emit).toHaveBeenCalledWith('Loaded');
        })
        // it("",function(){
        //   scope.vm.showTracks(scope.vm.playlists[0]);
        //   expect(scope.vm.playlists[0].trackLimit).toBe(3);
        // })


    // it("",function(){
    //   expect(scope.vm.playlists[0].trackLimit).toBe(5);
    // })
});

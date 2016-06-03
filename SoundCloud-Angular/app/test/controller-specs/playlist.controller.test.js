describe("Test playlist controller", function() {
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
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
        },{
          title: "Playlist3",
          picture:"",
          tracks:[]
        }
      ];
        $controller('PlaylistController as vm', {
            $scope: scope,
            playlistData: _playlistData
        });
    }));
    it("Add gives the correct result", function() {
        expect(scope.vm.trackLimit).toBe(5);
    });
    it("",function(){
      expect(scope.vm.playlists[0].trackLimit).toBe(5);
    })
    it("",function(){
      scope.vm.showTracks(scope.vm.playlists[0]);
      expect(scope.vm.playlists[0].trackLimit).toBe(3);
    })
    // it("",function(){
    //   expect(scope.vm.playlists[0].trackLimit).toBe(5);
    // })
    // it("",function(){
    //   expect(scope.vm.playlists[0].trackLimit).toBe(5);
    // })
    // it("",function(){
    //   expect(scope.vm.playlists[0].trackLimit).toBe(5);
    // })
});

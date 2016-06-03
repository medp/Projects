"use strict"
describe("Playlist ", function() {
    var playlists, app;

    beforeAll(function() {
        module("myApp");
        app = angular.module("myApp").models;
        playlists = [{
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
    })
    it("should be defined", function() {
        var p = new app.Playlist(playlists[1]);
        expect(p).toBeDefined();
    })
    it("should instantiate with the correct title", function() {
        var p = new app.Playlist(playlists[1]);
        expect(p.title).toEqual("SecondPlaylist");
    })
    it("should instantiate with the correct title", function() {
        var p = new app.Playlist(playlists[0]);
        expect(p.title).toEqual("FirstPlaylist");
    })
    it("should get the default url for the picture", function() {
        var p = new app.Playlist(playlists[2]);
        expect(p.picture).toEqual("http://localhost:8080/img/mail.png");
    })
    it("should get the correct url for the picture", function() {
        var p = new app.Playlist(playlists[0]);
        expect(p.picture).toEqual("img/data.png");
    })
    it("should have tracks defined", function() {
        var p = new app.Playlist(playlists[0]);
        expect(p.tracks[1]).toBeDefined();
    })
    it("should get the correct value for some track", function() {
        var p = new app.Playlist(playlists[1]);
        expect(p.tracks[0].songTitle).toEqual("Song1");
    })
})

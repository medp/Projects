"use strict"
describe("Song", function() {
    var tracks, app;

    beforeAll(function() {
        module("myApp");
        app = angular.module("myApp").models;
        tracks = [{
            title: "Song1",
            artwork_url: "img/data.png"
        }, {
            title: "Song2",
            artwork_url: "img/mail.png"
        }, {
            title: "Song3",
            artwork_url: "img/mail.png"
        }]
    })
    it("should be defined", function() {
        var s = new app.Song(tracks[1]);
        expect(s).toBeDefined();
    })
    it("should instantiate with the correct title", function() {
        var s = new app.Song(tracks[1]);
        expect(s.songTitle).toEqual("Song2");
    })

    it("should get the correct url for the picture", function() {
        var s = new app.Song(tracks[0]);
        expect(s.pictureSong).toEqual("img/data.png");
    })
})

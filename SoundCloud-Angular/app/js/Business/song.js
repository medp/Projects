(function() {
    'use strict';
    angular.module('myApp').models.Song = Song;

    function Song(song) {
        this.songTitle = song.title;
        this.pictureSong = song.artwork_url;
        return this;

    };
})();

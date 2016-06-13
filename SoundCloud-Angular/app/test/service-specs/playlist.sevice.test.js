"use strict"

beforeEach(module('myApp'));

describe("test repository", function() {
    var repo, service, httpBackend, q;
    beforeEach(function() {
        inject(function(playlistRepo, servicePlaylist, $httpBackend, $q) {
            service = servicePlaylist;
            repo = playlistRepo;
            httpBackend = $httpBackend;
        });

        q = $q.defer();
        spyOn(service, "dataService");
    });
    it("should call getData function from repo", function() {
        httpBackend.expectGET('https://api.soundcloud.com/playlists?client_id=02gUJC0hH2ct1EGOcYXQIzRFU91c72Ea').respond({});
        var verif = service.dataService();
        expect(service.dataService).toHaveBeenCalled();
        httpBackend.flush();
    });
});

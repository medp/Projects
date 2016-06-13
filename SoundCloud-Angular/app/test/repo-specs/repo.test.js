"use strict"

beforeEach(module('myApp'));

describe("test repository", function() {
    var repo, httpBackend, q;
    beforeEach(inject(function(playlistRepo, $httpBackend, $q) {
        repo = playlistRepo;
        httpBackend = $httpBackend;
    }));
    it("should call $http.get", function() {
        // $httpBackend.expectGET('/auth.py');
        // var controller = createController();
        // $httpBackend.flush()
        httpBackend.expectGET('https://api.soundcloud.com/playlists?client_id=02gUJC0hH2ct1EGOcYXQIzRFU91c72Ea').respond({});
        var promisData = repo.getData();
        httpBackend.flush();
        // expect(promisData).toBe({user:1});
    });
    it("should call getData", function() {
        spyOn(repo, "getData");
        var promiseData = repo.getData();
        expect(repo.getData).toHaveBeenCalled();
    });
});

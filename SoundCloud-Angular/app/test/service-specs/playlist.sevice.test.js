"use strict"

beforeEach(module('myApp'));

describe("test repository",function(){
    var repo,service,httpBackend,q;
    beforeEach(inject(function(playlistRepo,servicePlaylist,$httpBackend,$q){
      service = servicePlaylist;
      repo = playlistRepo;
      httpBackend = $httpBackend;
      q = $q.defer();
      spyOn(service,"dataService");
    }));
    it("should call getData function from repo",function(){
        var verif = service.dataService();
        expect(service.dataService).toHaveBeenCalled();
    });
    // it("should set the listOfplaylists",function(){
    //     var verif = service.dataService();
    //     // verif.then(function(response){
    //
    //     });
    // });
});

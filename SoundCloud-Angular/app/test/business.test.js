"use strict"
describe("Playlist ",function(){
  beforeEach(function(){
    module("myApp");
    inject(models)
    var APP = {
      playlists : [
        {
           title: FirstPlaylist,
           picture : "img/mail.png",
           tracks : [
             {
               songTitle : Song1,
               pictureSong : "img/mail.png"
             },
             {
               songTitle : Song2,
               pictureSong : "img/mail.png"
             },
             {
               songTitle : Song3,
               pictureSong : "img/mail.png"
             }
           ]
        },
        {
             title: SecondPlaylist,
             picture : "img/mail.png",
             tracks : [
               {
                 songTitle : Song1,
                 pictureSong : "img/mail.png"
               }
             ]
        }
      ]
    }
    }
  });
  it("should instantiate with the correct value",function(){
    var p =new Playlist(app.playlists[1]);
    expect(p.title).toEqual("FirstPlaylist");
  })

})

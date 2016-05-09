
(function(context,jQ) {
  'use strict';

  function genericRepo(success,error){
    return jQ.ajax({
      url: getUrl(),
      dataType: "json",
      type: 'GET',
      jsonp:false,
    })
      .done(function(data) {
        jQ("document").ready(success(data));
      })
      .fail(function( req, status, err ) {
        alert("fail");
      });
  }

  function getType(){
    return "GET";
  }
  function getUrl(){
    var url = "https://api.soundcloud.com/playlists?client_id=02gUJC0hH2ct1EGOcYXQIzRFU91c72Ea";
    return url;
  }

  context.repo.genericRepo = genericRepo;
})(myApp,jQuery);


(function(context,jQ) {
  'use strict';

  function genericRepo(options,success,error){
    return jQ.ajax({
      url: options.url,
      dataType: options.dataType,
      type: options.type,
      jsonp: options.bool,
    })
      .done(function(data) {
        jQ("document").ready(success(data));
      })
      .fail(function( req, status, err ) {
        alert("fail");
      });
  }

  function getPlaylists(success,error){
    var options ={
     url : "https://api.soundcloud.com/playlists?client_id=02gUJC0hH2ct1EGOcYXQIzRFU91c72Ea",
     dataType : "json",
     type: "GET",
     bool: false
   }
    return genericRepo(options,success,error);
  }

  context.repo.getPlaylists = getPlaylists;
})(myApp,jQuery);

var jqxhr = $.getJSON( "https://api.soundcloud.com/playlists?client_id=02gUJC0hH2ct1EGOcYXQIzRFU91c72Ea", function(data) {
  console.log( "success" );

})
  .done(function(data) {
    console.log( data );
  })
  .fail(function( req, status, err ) {
    alert("fail");
  });

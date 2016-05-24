(function(){
'use strict';

  angular.module('myApp').controller('footerController',footerController);

    function footerController(){
      var vf = this;
      vf.toggle = false;
      vf.togglePlayer = function(){
        vf.toggle = true;
      };
    }
})();

(function(){
'use strict';

  angular.module('myApp').controller('SpinnerController',spinnerController);

    function spinnerController(){
          this.isLoading = true;
      }
})();

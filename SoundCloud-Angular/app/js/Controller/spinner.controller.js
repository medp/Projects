(function(){
'use strict';

  angular.module('myApp').controller('SpinnerController',spinnerController);

  spinnerController.$inject=['$rootScope'];
    function spinnerController($rootScope){
      $rootScope.$on('Loaded',function(){$rootScope.isLoading=true;});
    }
})();

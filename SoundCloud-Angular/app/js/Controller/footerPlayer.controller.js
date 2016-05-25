(function(){
'use strict';

  angular.module('myApp').controller('footerController',footerController);

    footerController.$inject = ['$rootScope'];
    function footerController($rootScope){
      $rootScope.toggle = false;
      $rootScope.togglePlayer = function(){
        $rootScope.toggle = $rootScope.toggle === true ? false : true;
      };
    }
})();

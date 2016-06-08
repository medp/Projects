describe('Routes test with resolves', function() {
    var httpMock = {};
    beforeEach(module('myApp'));
    beforeEach(
        inject(function($http) {
            $http = httpMock;
        }));

    var $location, $route, $rootScope;

    beforeEach(inject(function(_$location_, _$route_, _$rootScope_, $httpBackend, $templateCache) {
        $location = _$location_;
        $route = _$route_;
        $rootScope = _$rootScope_;

        $templateCache.put('templates/main.html', 'main HTML');

        httpMock.get = jasmine.createSpy('spy').and.returnValue('test');
    }));

    // it('should load the index page on successful load of /',
    //     inject(function($injector){
    //         expect($location.path()).toBe( '' );
    //         // $location.path('/playlist');
    //         //
    //         // $rootScope.$digest();
    //         //
    //         // expect($location.path()).toBe( '/playlist' );
    //         // expect($route.current.controller).toBe('HomeController');
    //         //
    //         // // We need to do $injector.invoke to resolve dependencies
    //         // expect($injector.invoke($route.current.resolve.allowAccess)).toBe('test');
    // }));
});

// describe('Testing Routes', function(){
//   var $route, $rootScope, $location, $httpBackend;
//
//   beforeEach(function(){
//     module('myApp');
//
//     inject(function($injector){
//       $route = $injector.get('$route');
//       $rootScope = $injector.get('$rootScope');
//       $location = $injector.get('$location');
//       // $httpBackend = $injector.get('$httpBackend');
//
//       // $httpBackend.when('GET', 'templates/playlistTmpl.html').respond('playlist');
//     });
//   })
//
//   // it('should navigate to playlist', function(){
//   //   // navigate using $apply to safely run the $digest cycle
//   //   $rootScope.$apply(function() {
//   //     $location.path('/playlist');
//   //   });
//   //   expect($location.path()).toBe('/playlist');
//   //   // expect($route.current.templateUrl).toBe('home.tpl.html');
//   //   // expect($route.current.controller).toBe('MainCtrl');
//   // })
//
//   it('should redirect not registered urls to home', function(){
//     // navigate using $apply to safely run the $digest cycle
//     $rootScope.$apply(function() {
//       $location.path('/other');
//     });
//     expect($location.path()).toBe('/playlist');
//     // expect($route.current.templateUrl).toBe('home.tpl.html');
//     // expect($route.current.controller).toBe('MainCtrl');
//   })
// })

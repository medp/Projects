"use strict"

beforeEach(module('myApp'));


describe("Should test directive", function() {
    var $compile, $rootScope, headerElem;
    beforeEach(module("templates"));
    beforeEach(function() {
        inject(function(_$compile_, _$rootScope_) {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        });
        headerElem = getCompiledElem();
    });

    function getCompiledElem() {
        // Compile a piece of HTML containing the directive
        var element = $compile("<page-header></page-header>")($rootScope);
        // // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
        $rootScope.$digest();
        return element;
    }
    it('Contain image element with specified src', function() {
        var imgElement = headerElem.find('img').first();
        // // Check that the compiled element contains the templated conten
        expect(imgElement.attr('src')).toEqual('img/soundcloud.png');
    });
});

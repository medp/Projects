"use strict"

beforeEach(module('myApp'));


describe("Should test directive", function() {
    var $compile, $rootScope;
    beforeEach(module("templates"));
    beforeEach(inject(function(_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('Replaces the element with the appropriate content', function() {
        // expect(true).toBe(true);
        // Compile a piece of HTML containing the directive
        var element = $compile("<aside-cont></aside-cont>")($rootScope);
        // // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
        $rootScope.$digest();
        // // Check that the compiled element contains the templated content
        // expect(element.html()).toContain("Loading...");
    });



});

"use strict"

beforeEach(module('myApp'));


describe("Footer directive test", function() {
    var $compile, $rootScope, footerElem;
    // beforeEach();
    beforeEach(function() {
        module("templates");
        inject(function(_$compile_, _$rootScope_) {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        });
        footerElem = getCompiledElem();
    });

    function getCompiledElem() {
        // Compile a piece of HTML containing the directive
        var element = $compile("<footer-player></footer-player>")($rootScope);
        // // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
        $rootScope.$digest();
        return element;
    }
    it('Should be defined', function() {
        expect(footerElem).toBeDefined();
    });
    it('Contain span element ', function() {
        var formElement = footerElem.find('form');
        // // Check that the compiled element contains the templated content
        expect(formElement).toBeDefined();
        // expect(spanElement.text()).toEqual("Who to follow");
    });

    // it('Contain span element specified content', function() {
    //     var spanElement = asideElem.find('span').first();
    //     // // Check that the compiled element contains the templated content
    //     expect(spanElement.text()).toEqual("Who to follow");
    // });
    // it('Contain a fix number of th elements', function() {
    //     var rowElement = asideElem.find('th');
    //     // // Check that the compiled element contains the templated content
    //     expect(rowElement.length).toEqual(2);
    // });
    // it('Contain table element ', function() {
    //     var tableElement = asideElem.find('table');
    //     // // Check that the compiled element contains the templated content
    //     expect(tableElement).toBeDefined();
    //     // expect(spanElement.text()).toEqual("Who to follow");
    // });
    // it('Should contain table element with specified content', function() {
    //     var tableElement = asideElem.find('table');
    //     // // Check that the compiled element contains the templated content
    //     expect(tableElement.length).toEqual(1);
    //     // expect(spanElement.text()).toEqual("Who to follow");
    // });
    it('Contain anchor element ', function() {
        var anchorElement = footerElem.find('a');
        // // Check that the compiled element contains the templated content
        expect(anchorElement).toBeDefined();
        // expect(spanElement.text()).toEqual("Who to follow");
    });

});

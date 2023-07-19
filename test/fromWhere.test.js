import assert from "assert";
import fromWhere from "../fromWhere.js";

describe('Test My fromWhere Function' , function(){
    it("should return Bellville if the registration number is from Bellville" , function(){
        assert.equal(fromWhere('CY 567489'), 'Bellville');
    });
    it("should return Paarl if the registration number is from Paarl" , function(){
        assert.equal(fromWhere('CJ 343502'), 'Paarl');
    });
    it("should return Cape Town if the registration number is from Cape Town" , function(){
        assert.equal(fromWhere('CA 987504'), 'Cape Town');
    });
    it("should return Some other place! if the registration number is not from Bellville, Paarl, or Cape Town" , function(){
        assert.equal(fromWhere('ZN 568593'), 'Some other place!');
    });
});
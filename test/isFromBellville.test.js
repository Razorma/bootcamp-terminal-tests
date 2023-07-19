import assert from "assert";
import isFromBellville from "../isFromBellville.js";

describe('The isFromBellville function', function(){

    it('should return true if the registration number is from bellville', function(){
        assert.equal(true,isFromBellville('CY 123'));
    });
    it('should return false if the registration number is not  from bellville', function(){
        assert.equal(false, isFromBellville('CJ 123'));
    });
});
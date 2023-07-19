import assert from "assert";
import isWeekday from "../isWeekday.js";

describe('Test My isWeekday Function' , function(){
    it("should return true if Tuesday is passed" , function(){
        assert.equal(isWeekday('Monday'), true);  
    });
    it("should return true if Tuesday is passed" , function(){
        assert.equal(isWeekday('Tuesday'), true);
    });
    it("should return true if Wednesday is passed" , function(){
        assert.equal(isWeekday('Wednesday'), true);
    });
    it("should return true if Thursday is passed" , function(){
        assert.equal(isWeekday('Thursday'), true);
    });
    it("should return true if Friday is passed" , function(){
        assert.equal(isWeekday('Friday'), true);
    });
    it("should return false if Saturday is passed" , function(){
        assert.equal(isWeekday('Saturday'), false); 
    });
    it("should return false if Sunday is passed" , function(){
        assert.equal(isWeekday('Sunday'), false);  
    });
});
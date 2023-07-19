import assert from "assert";
import countRegNumber from "../countRegNumber.js";

describe('Test My countRegNumber Function' , function(){
    it("should return 3 if 'CA 182736,CY 523519,CJ 812328' is passed" , function(){
        assert.equal(3,countRegNumber('CA 182736,CY 523519,CJ 812328'));
    });
    it("should return 1 if 'CA 182736' is passed" , function(){
        assert.equal(1,countRegNumber('CA 182736'));
    });
    it("should return 2 if 'CA 182736, CJ 812328' is passed" , function(){
        assert.equal(2,countRegNumber('CA 182736, CJ 812328'));
    });
    it("should return 0 an empty string is passed" , function(){
        assert.equal(0,countRegNumber(''));
    });
});


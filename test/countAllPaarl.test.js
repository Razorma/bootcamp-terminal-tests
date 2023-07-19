import assert from "assert";
import countAllPaarl from "../countAllPaarl.js";

describe('Test My countAllPaarl function', function(){
    it('Should return the number of registration numbers that are from parl' ,function() {
        assert.equal(3,countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'))
    });
    it('Should return 0 if there are no registration numbers from parl' ,function() {
        assert.equal(0,countAllPaarl('CF 345 123, CF 2345, CL 123-546, CK 345, CF 123'))
    });
    it('Should return 0 an empty string is passed' ,function() {
        assert.equal(0,countAllPaarl('CF 345 123, CF 2345, CL 123-546, CK 345, CF 123'))
    });
});
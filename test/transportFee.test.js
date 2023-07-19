import assert from "assert";
import transportFee from "../transportFee.js";

describe('The transportFee function', function(){

    it('should return R20 if morning is passed', function(){
        assert.equal(transportFee('morning'), 'R20');

    });
    it('should return R10 if afternoon is passed', function(){
        assert.equal(transportFee('afternoon'), 'R10');
    });
    it('should return "for night shift return free" if nightshift is passed', function(){
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    });
});
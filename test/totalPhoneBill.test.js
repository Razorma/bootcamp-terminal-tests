import assert from "assert";
import totalPhoneBill from "../totalPhoneBill.js";

describe('Test My totalPhoneBill Function' , function(){
    it("Should return'R7.45' if 'call, sms, call, sms, sms' is passed" , function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });
    it("Should return'R3.40' if 'call, sms' is passed" , function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    });
    it("Should return R0.00 if no call or sms was made " , function(){
        assert.equal('R0.00',totalPhoneBill(''));
    });
});
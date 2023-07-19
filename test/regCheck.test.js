import assert from "assert";
import regCheck from "../regCheck.js";

describe('Test My regCheck Function' , function(){
    it("should return true if ('DC 55 YU GP', 'GP') is passed" , function(){
        assert.equal(true,regCheck('DC 55 YU GP', 'GP'));
    });
    it("should return true if ('5566 L', 'L') is passed" , function(){
      assert.equal(true,regCheck('5566 L', 'L'));
    });
    it("should return true if ('ERT 123 EC', 'EC') is passed" , function(){
      assert.equal(true,regCheck('ERT 123 EC', 'EC'));
    });
    it("should return true if ('FGT 123 MP', 'MP') is passed." , function(){
      assert.equal(true,regCheck('FGT 123 MP', 'MP'));
    });
    it("should return false if ('DC 55 YU GP', 'EC') is passed" , function(){
        assert.equal(false,regCheck('DC 55 YU GP', 'EC'));
    });
    it("should return false if ('5566 L', 'M') is passed" , function(){
      assert.equal(false,regCheck('5566 L', 'M'));
    });
    it("should return false if ('ERT 123 EC', 'GP') is passed" , function(){
      assert.equal(false,regCheck('ERT 123 EC', 'GP'));
    });
    it("should return false if the string ('FGT 123 MM', 'MP') is passed" , function(){
      assert.equal(false,regCheck('FGT 123 MM', 'MP'));
    });
  });
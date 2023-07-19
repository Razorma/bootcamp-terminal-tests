import assert from "assert";
import findItemsOver from "../findItemsOver.js";

describe('Test My findItemsOver Function' , function(){
    var itemList1 = [
        {name : 'apples', qty : 40},
        {name : 'pears', qty : 20},
        {name : 'bananas', qty : 23},
        {name : 'apples', qty : 37}
    ];
    
    var results1 = [
        {name : 'apples', qty : 40},
        {name : 'bananas', qty : 23},
        {name : 'apples', qty : 37}
    ];

    var itemList2 = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 19},
        {name : 'bananas', qty : 17},
        {name : 'apples', qty : 3},
    ]; 

    var results2 = [];
    
    var itemList3 = [
        {name : 'apples', qty : 30},
        {name : 'pears', qty : 39},
        {name : 'bananas', qty : 47},
        {name : 'apples', qty : 31},
    ]; 

    var results3 = [
        {name : 'apples', qty : 30},
        {name : 'pears', qty : 39},
        {name : 'bananas', qty : 47},
        {name : 'apples', qty : 31},
    ]; 


    it("The function should return products that have quantity higher 20." , function(){
        assert.deepEqual(results1, findItemsOver(itemList1, 20));
    });
    it("The function an empty array if products that have quantity higher than 25" , function(){
        assert.deepEqual(results3, findItemsOver(itemList3, 25));
    });
    it("The function an empty array if products that have quantity 20 are not found" , function(){
        assert.deepEqual(results2, findItemsOver(itemList2, 20));
    });
});
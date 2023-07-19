import assert from "assert";
import findItemsOver20 from "../findItemsOver20.js";

describe('Test My findItemsOver20 Function' , function(){
    var itemList = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
    ];
    
    var results = [
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
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
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 31},
    ]; 

    var results3 = [
        {name : 'apples', qty : 30},
        {name : 'pears', qty : 39},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 31},
    ];

    it("The function should return all the products that have a quantity higher than 20." , function(){
        assert.deepEqual(results, findItemsOver20(itemList));
    });
    it("The function should return an empty array if there is no item over 20" , function(){
        assert.deepEqual(results2, findItemsOver20(itemList2, 20));
    });
    it("The function should return all the products if they are over over 20" , function(){
        assert.deepEqual(results3, findItemsOver20(itemList3, 20));
    });
});
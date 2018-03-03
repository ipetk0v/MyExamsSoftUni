// 4.	Sum of Numbers
// Write Mocha tests to check the functionality of the following JS code:
// rgb-to-hex.js
// Your tests will be supplied a function named 'sum'. It needs to meet the following requirements:
// •	Takes and array of numbers as argument
// •	Returns the sum of the values of all elements inside the array
function sum(arr) {
    let sum = 0;
    for (num of arr)
        sum += Number(num);
    return sum;
}

let expect = require('chai').expect

describe('Sum function', function(){
    it('Should return 3 [1,2]', function(){
        expect(sum([1,2])).to.be.equal(3)
    })

    it('Should return 0 []', function(){
        expect(sum([])).to.be.equal(0)
    })

    it('Should return 1 [1]', function(){
        expect(sum([1])).to.be.equal(1)
    })

    it('Should return 3.15 [-1,3.15,1]', function(){
        expect(sum([-1,3.15,1])).to.be.equal(3.15)
    })

    it('Should return NaN string', function(){
        expect(sum('test')).to.be.NaN
    })
})
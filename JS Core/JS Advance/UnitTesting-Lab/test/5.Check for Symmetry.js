function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}

let expect = require('chai').expect

describe('Symmetric tests', function(){
    it('Should be true [1,2,1]', function(){
        expect(isSymmetric([1,2,1])).to.be.equal(true)
    })

    it('Should be false [1,2]', function(){
        expect(isSymmetric([1,2])).to.be.equal(false)
    })

    it('Should be true []', function(){
        expect(isSymmetric([])).to.be.equal(true)
    })

    it('Should be true [test,1,test]', function(){
        expect(isSymmetric(['test', 1 , 'test'])).to.be.equal(true)
    })

    it('Should be false [test,1]', function(){
        expect(isSymmetric(['test', 1])).to.be.equal(false)
    })

    it('Should be true [-1,1,-1]', function(){
        expect(isSymmetric([-1,1,-1])).to.be.equal(true)
    })

    it('Should be false String', function(){
        expect(isSymmetric('test')).to.be.equal(false)
    })

    it('Should be false []]', function(){
        expect(isSymmetric([])).to.be.equal(true)
    })

    it('Should be true [true,1]]', function(){
        expect(isSymmetric([true,1])).to.be.equal(false)
    })
})
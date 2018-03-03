function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

let expect = require('chai').expect

describe('Test isOddOrEven', function(){
    it('Shoud be even', function(){
        expect(isOddOrEven('10')).to.be.equal('even')
    })
    it('Shoud be odd', function(){
        expect(isOddOrEven('9')).to.be.equal('odd')
    })
    it('Shoud be undefined', function(){
        expect(isOddOrEven(10)).to.be.undefined
    })    
    it('Shoud be even -1', function(){
        expect(isOddOrEven('-1')).to.be.equal('even')
    })    
    it('Shoud be odd -2', function(){
        expect(isOddOrEven('-2')).to.be.equal('even')
    })
})
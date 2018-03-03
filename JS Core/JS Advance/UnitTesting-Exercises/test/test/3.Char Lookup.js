function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}


let expect = require('chai').expect

describe('Test lookUpChar', function(){
    it('Shoud undefined', function(){
        expect(lookupChar(1,1)).to.be.undefined
    })

    it('Shoud undefined', function(){
        expect(lookupChar('1','1')).to.be.undefined
    })

    it('Shoud Incorrect index', function(){
        expect(lookupChar('asd', 4)).to.be.equal('Incorrect index')
    })    

    it('Shoud Incorrect index', function(){
        expect(lookupChar('asd', -1)).to.be.equal('Incorrect index')
    })

    it('Shoud Correct s', function(){
        expect(lookupChar('asd', 1)).to.be.equal('s')
    })

    it('Shoud undefined', function(){
        expect(lookupChar('asd', 1.2)).to.be.undefined
    })
})
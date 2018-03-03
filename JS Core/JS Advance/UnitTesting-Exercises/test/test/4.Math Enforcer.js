let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

let expect = require('chai').expect

describe('Test mathEnforcer', function(){        
    let engine
    beforeEach(function(){
        engine = mathEnforcer        
    })    
    it('Shoud 2 [sum 1,1]', function() {
        expect(engine.sum(1,1)).to.be.equal(2)
    })

    it('Shoud 5 [add 0]', function() {
        expect(engine.addFive(0)).to.be.equal(5)
    })    
    it('Shoud 10 [sub 20]', function() {
        expect(engine.subtractTen(20)).to.be.equal(10)
    })
    it('Shoud undefined [add string]', function() {
        expect(engine.addFive('10')).to.be.undefined
    })
    it('Shoud undefined [sub string]', function() {
        expect(engine.subtractTen('10')).to.be.undefined
    })
    it('Shoud undefined [sum string,string]', function() {
        expect(engine.sum('10','10')).to.be.undefined
    })
    it('Shoud undefined [sum string,10]', function() {
        expect(engine.sum('10', 10)).to.be.undefined
    })
    it('Shoud undefined [sum 10,string]', function() {
        expect(engine.sum(10, '10')).to.be.undefined
    })
    it('Shoud 0 [add -5]', function() {
        expect(engine.addFive(-5)).to.be.equal(0)
    })
    it('Shoud -20 [sub -10]', function() {
        expect(engine.subtractTen(-10)).to.be.equal(-20)
    })
    it('Shoud -20 [sum -10, -10]', function() {
        expect(engine.sum(-10,-10)).to.be.equal(-20)
    })
    it('Shoud 11.5 [sum 1.5, 10]', function() {
        expect(engine.sum(1.5,10)).to.be.equal(11.5)
    })
    it('Shoud 11.5 [sum 10, 1.5]', function() {
        expect(engine.sum(10,1.5)).to.be.equal(11.5)
    })
    it('Shoud 1.5 [sub 11.5]', function() {
        expect(engine.subtractTen(11.5)).to.be.equal(1.5)
    })
    it('Shoud 1.5 [add 1.5]', function() {
        expect(engine.addFive(1.5)).to.be.equal(6.5)
    })
})
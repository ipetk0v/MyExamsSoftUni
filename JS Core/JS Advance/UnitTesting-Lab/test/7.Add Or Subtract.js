function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}
createCalculator().add('asd')

let expect = require('chai').expect

describe('Test Create Calculator', function(){
    let calc
    beforeEach(function(){
        calc = createCalculator()
    })

    it('Shoud be 0 [calc.get]', function(){
        expect(calc.get()).to.be.equal(0)
    })

    it('Shoud be 2 [add 10, sub 7, add -2, sub -1]', function(){
        calc.add(10)
        calc.subtract('7')
        calc.add('-2')
        calc.subtract(-1)
        expect(calc.get()).to.be.equal(2)
    })

    it('Shoud be 2 add 2', function(){
        calc.add(2)
        expect(calc.get()).to.be.equal(2)
    })

    it('Shoud be 1 [add 2 substract 1]', function(){
        calc.add(2)
        calc.subtract(1)
        expect(calc.get()).to.be.equal(1)
    })

    it('Shoud be -1 [substract 1]', function(){
        calc.subtract(1)
        expect(calc.get()).to.be.equal(-1)
    })
    it('Shoud be -1 [substract 1]', function(){
        calc.subtract(-1)
        expect(calc.get()).to.be.equal(1)
    })
    it('Shoud be -1 [add -1]', function(){
        calc.add(-1)
        expect(calc.get()).to.be.equal(-1)
    })

    it('Shoud be NaN [add string]', function(){
        calc.add('asd')
        expect(calc.get()).to.be.NaN
    })

    it('Shoud be NaN [subsract string]', function(){
        calc.subtract('asd')
        expect(calc.get()).to.be.NaN
    })

    it('Shoud be 2.2 [add 1.1 add 1.1]', function(){
        calc.add(1.1)
        calc.add(1.1)
        expect(calc.get()).to.be.equal(2.2)
    })
})


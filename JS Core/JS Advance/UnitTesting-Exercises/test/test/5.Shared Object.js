let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};

let expect = require('chai').expect

describe('Test sharedObject', function(){        
    let engine
    beforeEach(function(){
        engine = sharedObject        
    })    

    it('Shoud null [prop name]', function() {
        expect(engine.name).to.be.null
    })
    it('Shoud null [prop income]', function() {
        expect(engine.income).to.be.null
    })
    it('Shoud null [prop changeName]', function() {
        expect(engine.changeName).to.be.null
    })
    it('Shoud null [prop changeIncome]', function() {
        expect(engine.changeIncome).to.be.null
    })
    it('Shoud null [prop updateName]', function() {
        expect(engine.updateName).to.be.null
    })    
    it('Shoud null [prop updateIncome]', function() {
        expect(engine.updateIncome).to.be.null
    })
})

class Sumator {
    constructor() {
     this.data = [];
     }
     add(item) {
     this.data.push(item);
     }
     sumNums() {
     let sum = 0;
     for (let item of this.data)
     if (typeof (item) === 'number')
     sum += item;
     return sum;
     }
     removeByFilter(filterFunc) {
     this.data = this.data.filter(x => !filterFunc(x));
     }
     toString() {
     if (this.data.length > 0)
     return this.data.join(", ");
     else
     return '(empty)';
     }
    }

    let expect = require('chai').expect

    describe("Test Sumator Class", function() {
        let sumator
        beforeEach(function(){
            sumator = new Sumator()
        })
        it("checkAddFunction", function() {
            sumator.add(12)
            expect(sumator.toString()).to.be.equal("12")
        });  
            it("checkToStringFunction", function() {
            sumator.add(12)
            let toString = sumator.toString()
            expect(toString).to.be.equal("12")
        });
        it("checkSumNumsFunction", function() {
            sumator.add(10)
            sumator.add(10)
            expect(sumator.sumNums()).to.be.equal(20)
        });        

        it("checkRemoveByFilterFunction", function() {
            sumator.add(10)
            sumator.add(9)
            sumator.removeByFilter(x => x % 2 === 0)
            expect(sumator.toString()).to.be.equal("9")
        });
        it("CreateClassSumator", function() {
            let sumatores = new Sumator()
            expect(sumatores.toString()).to.be.equal("(empty)")
        });
        it("CheckAddNumAndStringAndSum", function() {
            sumator.add(10)
            sumator.add("asd")
            sumator.add(2)
            expect(sumator.sumNums()).to.be.equal(12)
        });

        it("CheckAddNumAndStringAndPrint", function() {
            sumator.add(10)
            sumator.add("asd")
            expect(sumator.toString()).to.be.equal("10, asd")
        });
    });
       
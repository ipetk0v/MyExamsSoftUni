class PaymentPackage {
    constructor(name, value) {
      this.name = name;
      this.value = value;
      this.VAT = 20;      // Default value    
      this.active = true; // Default value
    }
  
    get name() {
      return this._name;
    }
  
    set name(newValue) {
      if (typeof newValue !== 'string') {
        throw new Error('Name must be a non-empty string');
      }
      if (newValue.length === 0) {
        throw new Error('Name must be a non-empty string');
      }
      this._name = newValue;
    }
  
    get value() {
      return this._value;
    }
  
    set value(newValue) {
      if (typeof newValue !== 'number') {
        throw new Error('Value must be a non-negative number');
      }
      if (newValue < 0) {
        throw new Error('Value must be a non-negative number');
      }
      this._value = newValue;
    }
  
    get VAT() {
      return this._VAT;
    }
  
    set VAT(newValue) {
      if (typeof newValue !== 'number') {
        throw new Error('VAT must be a non-negative number');
      }
      if (newValue < 0) {
        throw new Error('VAT must be a non-negative number');
      }
      this._VAT = newValue;
    }
  
    get active() {
      return this._active;
    }
  
    set active(newValue) {
      if (typeof newValue !== 'boolean') {
        throw new Error('Active status must be a boolean');
      }
      this._active = newValue;
    }
  
    toString() {
      const output = [
        `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
        `- Value (excl. VAT): ${this.value}`,
        `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
      ];
      return output.join('\n');
    }
  }
  

    let expect = require('chai').expect

    describe("Test PaymentPackage Class", function() {
        it("checkNameFunction", function() {     
            let paymentPackage = new PaymentPackage('ivan',22)    
            expect(paymentPackage.name).to.be.equal('ivan')
        });       
        it("checkValueFunction", function() {     
            let paymentPackage = new PaymentPackage('ivan',22)    
            expect(paymentPackage.value).to.be.equal(22)
        });    
        it("checkVatFunction", function() {     
            let paymentPackage = new PaymentPackage('ivan',22)    
            expect(paymentPackage.VAT).to.be.equal(20)
        });   
        it("checkActiveFunction", function() {     
            let paymentPackage = new PaymentPackage('ivan',22)    
            expect(paymentPackage.active).to.be.equal(true)
        });  
        it("checkForErrorEmptyName", function() { 
            expect(() => new PaymentPackage('',22)).to.throw('Name must be a non-empty string')
        });  
        it("checkForErrorIncorrectName", function() { 
            expect(() => new PaymentPackage(23,22)).to.throw('Name must be a non-empty string')
        }); 
        it("checkForErrorIncorrectValue", function() { 
            expect(() => new PaymentPackage("ivan",'asd')).to.throw('Value must be a non-negative number')
        });  
        it("checkForErrorValueIsUnderZero", function() { 
            expect(() => new PaymentPackage("ivan",-1)).to.throw('Value must be a non-negative number')
        });  
        it("checkCorrectVat", function() { 
            expect(() => new PaymentPackage("ivan",22).VAT = '22').to.throw('VAT must be a non-negative number')
        });  

        it("checkCorrectNegativeVat", function() { 
            expect(() => new PaymentPackage("ivan",22).VAT = -22).to.throw('VAT must be a non-negative number')
        });  

        it("checkActive", function() { 
            expect(() => new PaymentPackage("ivan",22).active = -22).to.throw('Active status must be a boolean')
        });  

        it("checkInactive", function() { 
            let pp = new PaymentPackage('ivan',22)
            pp.active = false
            expect(pp.active).to.be.equal(false)
        });  

        it("checkToString", function() { 
            let pp = new PaymentPackage('ivan',22)
            const output = [
                `Package: ${pp.name}` + (pp.active === false ? ' (inactive)' : ''),
                `- Value (excl. VAT): ${pp.value}`,
                `- Value (VAT ${pp.VAT}%): ${pp.value * (1 + pp.VAT / 100)}`
              ];
            expect(pp.toString()).to.be.equal(output.join('\n'))
        });  

        it("checkInactiveStatus", function() { 
            let pp = new PaymentPackage('ivan',22)
            pp.active = false
            const output = [
                `Package: ${pp.name}` + (pp.active === false ? ' (inactive)' : ''),
                `- Value (excl. VAT): ${pp.value}`,
                `- Value (VAT ${pp.VAT}%): ${pp.value * (1 + pp.VAT / 100)}`
              ];
            expect(pp.toString()).to.be.equal(output.join('\n'))
        });  
    });
class StringBuilder {
    constructor(string) {
      if (string !== undefined) {
        StringBuilder._vrfyParam(string);
        this._stringArray = Array.from(string);
      } else {
        this._stringArray = [];
      }
    }
  
    append(string) {
      StringBuilder._vrfyParam(string);
      for(let i = 0; i < string.length; i++) {
        this._stringArray.push(string[i]);
      }
    }
  
    prepend(string) {
      StringBuilder._vrfyParam(string);
      for(let i = string.length - 1; i >= 0; i--) {
        this._stringArray.unshift(string[i]);
      }
    }
  
    insertAt(string, startIndex) {
      StringBuilder._vrfyParam(string);
      this._stringArray.splice(startIndex, 0, ...string);
    }
  
    remove(startIndex, length) {
      this._stringArray.splice(startIndex, length);
    }
  
    static _vrfyParam(param) {
      if (typeof param !== 'string') throw new TypeError('Argument must be string');
    }
  
    toString() {
      return this._stringArray.join('');
    }
  }
  
let expect = require('chai').expect

describe("SbTests", function() {
    let sb
    beforeEach(function(){
        sb = new StringBuilder()
    })

    // Validation input data
    it("CheckInputDataIsString", function() {
        sb.append("asd")
        expect(sb.toString()).to.be.equal("asd")
    });      

    it("CheckInputDataIsNumber", function() {
        expect(() => sb.append(12)).to.throw(TypeError)
    });

    it("CheckInputDataIsObject", function() {
      expect(() => sb.append({})).to.throw(TypeError)
    });

    it("CheckInputDataIsArray", function() {
      expect(() => sb.append(['1','2'])).to.throw(TypeError)
    });

    // Validation functionality
    it("CheckAppendMethod", function() {
        sb.append("string ")
        sb.append("this is new string")
        expect(sb.toString()).to.equal("string this is new string");
    });

    it("CheckPrependMethod", function() {
        sb.append(" string")
        sb.prepend("this is new")
        expect(sb.toString()).to.equal("this is new string");
    });
    
    it("CheckInsertAtMethod", function() {
        sb.append("sting")
        sb.insertAt("r",2)
        expect(sb.toString()).to.equal("string");
    });

    it("CheckRemoveMethod", function() {
        sb.append("sting")
        sb.remove(0,2)
        expect(sb.toString()).to.equal("ing");
    });

    it("CheckToStringMethod", function() {
        sb.append("string")
        let result = sb.toString()
        expect(result).to.equal("string");
    });

    it("Check Append string In Constructor", function() {
        let newSb = new StringBuilder("string")
        expect(newSb.toString()).to.equal("string");
    });

    it("Check Create New String Builder", function() {
        let newSb = new StringBuilder()
        expect(newSb.toString()).to.equal("");
    });

    it("Check Incorrect Index", function() {
      sb.append("string")
      sb.remove(-3)
      expect(sb.toString()).to.equal("string");
    });
});

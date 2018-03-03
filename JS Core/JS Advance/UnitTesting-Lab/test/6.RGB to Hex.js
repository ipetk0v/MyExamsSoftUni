function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255))
        return undefined; // Red value is invalid
    if (!Number.isInteger(green) || (green < 0) || (green > 255))
        return undefined; // Green value is invalid
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
        return undefined; // Blue value is invalid
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

let expect = require('chai').expect

describe('Test RGB to Hex Function', function(){
    it('Shoud be black [0,0,0]', function(){
        expect(rgbToHexColor(0,0,0)).to.be.equal('#000000')
    })
    it('Shoud be white [255,255,255]', function(){
        expect(rgbToHexColor(255,255,255)).to.be.equal('#FFFFFF')
    })
    it('Shoud be pink [255,158,170]', function(){
        expect(rgbToHexColor(255,158,170)).to.be.equal('#FF9EAA')
    })
    it('Shoud be black [12,13,14]', function(){
        expect(rgbToHexColor(12,13,14)).to.be.equal('#0C0D0E')
    })    
    it('Shoud be undefined [0,-1,0]', function(){
        expect(rgbToHexColor(0,-1,0)).to.be.equal(undefined)
    })
    it('Shoud be undefined [256,0,0]', function(){
        expect(rgbToHexColor(256,0,0)).to.be.equal(undefined)
    })    
    it('Shoud be undefined [3.14,0,0]', function(){
        expect(rgbToHexColor(3.14,0,0)).to.be.equal(undefined)
    })
    
    it('Shoud be undefined [0]', function(){
        expect(rgbToHexColor(0)).to.be.equal(undefined)
    })
})
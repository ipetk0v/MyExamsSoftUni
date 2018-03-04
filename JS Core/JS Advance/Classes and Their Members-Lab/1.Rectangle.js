// 1.	Rectangle
// Write a JS class for a rectangle object. It needs to have a width (Number), height (Number) and color (String) properties, which are set from the constructor and a calcArea() method, that calculates and returns the rectangle’s area.
// Input
// The constructor function will receive valid parameters.
// Output
// The calcArea() method should return a number.
// Submit the class definition as is, without wrapping it in any function.

class Rectangle{
    constructor(width, height, color){
        this.width = width
        this.height = height
        this.color = color
    }

    calcArea(){
        return this.width * this.height
    }
}

let myRect = new Rectangle(5,10,'red')
console.log(myRect)
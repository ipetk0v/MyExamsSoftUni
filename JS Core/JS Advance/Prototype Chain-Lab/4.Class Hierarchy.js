// 4.	Class Hierarchy
// Write a JS function that returns 3 classes - Figure, Circle, Rectangle. 
// Figure:
// •	should be abstract (cannot be instantiated)
// Circle:
// •	extends Figure.
// •	has a property radius
// •	overrides area getter to return the area of the Circle (PI * r * r)
// •	toString() - should return a string representation of the figure in the format "{type} - radius: {radius}"
// Rectangle
// •	extends Figure
// •	has properties width and height
// •	overrides area getter to return the area of the Rectangle (width * height)
// •	toString() - should return a string representation of the figure in the format "{type} - width: {width}, height: {height}"
// Input
// There will be no input.
// Output
// Your function should return an object containing the Figure, Circle and Rectangle classes.

    class Figure {
        constructor() {
            if(new.target === Figure){
                throw new TypeError('Figure class is abstract!')
            }
        }
        toString(){
            return this.constructor.name
        }
    }
    
    class Circle extends Figure{
        constructor(radius){
            super()
            this.radius = radius
        }
        get area(){
            return (Math.PI * this.radius * this.radius)
        }
        toString(){
            return `${super.toString()} - radius: ${this.radius}`
        }
    }
    
    class Rectangle extends Figure{
        constructor(width, height){
            super()
            this.width = width
            this.height = height
        }
        get area(){
            return this.width * this.height
        }
        toString(){
            return `${super.toString()} - width: ${this.width}, height: ${this.height}`
        }
    }



// let f = new Figure();       //Error
let c = new Circle(5);
console.log(c.area);        //78.53981633974483

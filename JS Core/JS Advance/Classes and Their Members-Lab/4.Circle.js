// 4.	Circle
// Write a JS class that represents a Circle. It has only one data property – it’s radius, and it is set trough the constructor. The class needs to have getter and setter methods for its diameter – the setter needs to calculate the radius and change it and the getter needs to use the radius to calculate the diameter and return it.
// The circle also has a getter area(), which calculates and returns its area.
// Input
// The constructor function and diameter setter will receive valid parameters.
// Output
// The diameter() and area() getters should return numbers.
// Submit the class definition as is, without wrapping it in any function.

class Circle{
    constructor(radius){
        this.radius = radius
    }

    get diameter(){
        return this.radius * 2
    }

    set diameter(newDiameter){
        this.radius = newDiameter / 2
    }

    get area(){
        return Math.PI * this.radius * this.radius
    }
}

let c = new Circle(10)
c.diameter = 10
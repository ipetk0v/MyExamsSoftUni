// 5.	Point Distance
// Write a JS class that represents a Point. It has x and y coordinates as properties, that are set through the constructor, and a static method for finding the distance between two points, called distance().
// Input
// The distance() method should receive two Point objects as parameters.
// Output
// The distance() method should return a number, the distance between the two point parameters.
// Submit the class definition as is, without wrapping it in any function.

class Point{
    constructor(x, y){
        this.x = x
        this.y = y
    }

    static distance(a,b){
        const dx = a.x - b.x
        const dy = a.y - b.y
        return Math.sqrt(dx*dx + dy*dy)
    }
}
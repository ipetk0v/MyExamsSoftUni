// 1.	Order Rectangles
// You will be passed a few pairs of widths and heights of rectangles, create objects to represent the rectangles. The objects should additionally have two functions area - that returns the area of the rectangle and compareTo - that compares the current rectangle with another and produces a number  signifying if the current rectangle is smaller (negative number), equal (0) or larger(positive number) than the other rectangle. 
// Input
// The input will come as an array of arrays - every nested array will contain exactly 2 numbers the width and the height of the rectangle.
// Output
// The output must consist of an array of rectangles (objects) sorted by their area in descending order as a first criteria and by their width in descending order as a second criteria.  


function orderRectangles(matrix){
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = {
            width: matrix[i][0], 
            height:matrix[i][1], 
            area:function() {
                return this.width * this.height
            } , 
            compareTo:function(other){
                let diff = other.area() - this.area()
                return diff || other.width - this.width
            }           
        }
    }
    matrix.sort((a,b) => a.compareTo(b))
    return matrix
}

console.log(orderRectangles([[10,5],[5,12]]))
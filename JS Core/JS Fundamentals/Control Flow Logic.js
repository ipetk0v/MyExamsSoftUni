// 1.	Multiply Numbers
// Write a JS function that calculates the product of two numbers.
// The input comes as two number arguments.
// The output should be the returned as a result of your function.

function multiplyNumbers(firstNum, secondNum) {
    console.log(firstNum * secondNum)
}

// 2.	Boxes and Bottles
// Write a JS function to calculate how many boxes will be needed to fit n bottles if each box fits k bottles.
// The input comes as two number arguments. The first element is the number of bottles and the second is the capacity of a single box.
// The output should be printed to the console.

function boxesAndBottles(firstNum, secondNum) {
    console.log(Math.ceil(firstNum / secondNum))
}

// 3.	Leap Year
// Write a JS function to check whether a year is leap. Leap years are either divisible by 4 but not by 100 or are divisible by 400.
// The input comes as a single number argument.
// The output should be printed to the console. Print yes if the year is leap and no otherwise.

function leapYear(year) {
    if (year % 4 === 0 && year % 100 !== 0) {
        console.log("yes")
    } else if (year % 400 === 0) {
        console.log("yes")
    } else {
        console.log("no")
    }    
}

// 4.	Circle Area
// Write a JS function that calculates circle area by given radius. Print the area as it is calculated and then print it rounded to two decimal places.
// The input comes as a single number argument.

function circleArea(num) {
    let result = Math.PI * num * num;
    console.log(result)
    console.log(result.toFixed(2))
}

// 5.	Triangle Area
// Write a JS function that calculates a triangle’s area by its 3 sides.
// The input comes as three number arguments, representing one side of a triangle.
// The output should be printed to the console.

function triangleArea(sideA,sideB,sideC) {
    let p = (sideA+sideB+sideC) / 2;
    let result = Math.sqrt(p*((p-sideA)*(p-sideB)*(p-sideC)));
    console.log(result)
}

// 6.	Cone
// Write a JS function to calculate a cone’s volume and surface area by given height and radius at the base.
// The input comes as two number arguments. The first element is the cone’s radius and the second is its height.
// The output should be printed to the console on a new line for every result.

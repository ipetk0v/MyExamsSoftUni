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

function cone(r,h) {
    let volume = Math.PI * r * r * h / 3;
    let s = Math.sqrt(r * r + h * h);
    let area = Math.PI * r * (r + s);
    console.log(volume)
    console.log(area)
}

// 7.	Odd / Even
// Write a JS function to check if a number is odd or even or invalid (fractions are neither odd nor even).
// The input comes as a single number argument.
// The output should be printed to the console. Print odd for odd numbers, even for even number and invalid for numbers that contain decimal fractions.

function oddOrEven(num) {
    if (!Number.isInteger(num)) {
        console.log("invalid")
    } else if (Math.abs(num) % 2 === 0) {
        console.log("even")
    } else if (Math.abs(num) % 2 === 1){
        console.log("odd")
    }
}

// 8.	Fruit or Vegetable
// Write a JS function to print "fruit", "vegetable" or "unknown" depending on the input string.
// •	Fruits are: banana, apple, kiwi, cherry, lemon, grapes, peach
// •	Vegetable are: tomato, cucumber, pepper, onion, garlic, parsley
// •	All others are unknown
// The input comes as a single string argument, the name of the fruit.
// The output should be printed to the console.

function fruitOrVegatabl(name) {
    let fruits = ['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes', 'peach'] 
    let vegetable = ['tomato', 'cucumber', 'pepper', 'onion', 'garlic', 'parsley']
    
    if (fruits.includes(name)) {
        console.log("fruit")
    } else if (vegetable.includes(name)){
        console.log("vegetable")
    } else {
        console.log("unknown")
    }
}

// 9.	Colorful Numbers
// Write a JS function to print the numbers from 1 to n. Return a string holding HTML list with the odd lines in blue and even lines in green. See the example for more information.
// The input comes as a single number argument n.
// The output should be returned as a result of your function in the form of a string.

function colorfulNumbers(num) {
    console.log("<ul>")
        for (let index = 1; index <= num; index++) {
            if (index % 2 !== 0) {
                console.log("<li><span style='color:green'>%d</span></li>",index)
            } else {
                console.log("<li><span style='color:blue'>%d</span></li>",index)
            }            
        }
    console.log("</ul>")
}

// 10.	Chess Board
// Write a JS function to print a chessboard of size n X n. See the example for more information.
// The input comes as a single number argument n.
// The output should be returned as a result of your function in the form of a string.

function chessBoard(num) {
    console.log("<div class=\"chessboard\">")
    for (let outIndex = 1; outIndex <= num; outIndex++) {
        console.log("<div>")    
        for (let index = 1; index <= num; index++) {
            if (index % 2 !== 0 && outIndex % 2 !== 0) {
                console.log("<span class=\"black\"></span>")
            } else if (index % 2 === 0 && outIndex % 2 === 0){
                console.log("<span class=\"black\"></span>")
            } else {
                console.log("<span class=\"white\"></span>")
            }     
        }
            console.log("</div>")    
    }
    console.log("</div>")
}

// 11.	Binary Logarithm
// Write a JS function that prints the binary logarithm (log2 x) for each number in the input.
// The input comes as an array of number elements.
// The output should be printed to the console, on a new line for each number.

function binaryLogorithm(array) {
    array.forEach(element => {
        console.log(Math.log2(element))
    });
}

binaryLogorithm([1024,1048576,256,1,2,50,100])

// 12.	Prime Number Checker
// Write a JS function to check if a number is prime (only wholly divisible by itself and one).
// The input comes as a single number argument.
// The output should be the return value of your function. Return true for prime number and false otherwise.

function primeNumberChecker(num) {
    if (num < 2) {
        console.log("false")
        return
    }
    for(var i = 2; i < num; i++) {
        if(num % i === 0) {
            console.log("false")
            return
        }
    }
    console.log("true")
}

// 1.	Print an Array with a given Delimiter
// Write a JS function that prints a given array.
// The input comes as array of strings. The last element of the array is the delimiter.
// The output is the same array, printed on the console, each element separated from the others by the given delimiter.

function printAnArrayWithAfivenDelimiter(input) {
    let delimeter = input.pop()
    console.log(input.join(delimeter))
}

// 2.	Print every N-th Element from an Array 
// Write a JS function that prints every element of an array, on a given step.
// The input comes as array of strings. The last element is N - the step.
// The output is every element on the N-th step starting from the first one. If the step is “3”, you need to print the 1-st, the 4-th, the 7-th … and so on, until you reach the end of the array. The elements must be printed each on a new line.

function printEveryNthElementFromAnArray(input) {
    let step = Number(input.pop())

    for (let index = 0; index < input.length; index += step) {
        console.log(input[index])
    }
}

// 3.	*Add and Remove Elements from Array
// Write a JS function that adds and removes numbers to / from an array. You will receive a command which can either be “add” or “remove”. 
// The initial number is 1. Each input command should increase that number, regardless of what it is.

// Upon receiving an “add” command you should add the current number to your array. 
// Upon receiving the “remove” command you should remove the last entered number, currently existent in the array.
// The input comes as array of strings. Each element holds a command. 
// The output is the array itself, with each element printed on a new line. In case of an empty array, just print “Empty”.

function addAndRemoveElementsFromArray(input) {
    let counter = 1;
    let arr = []

    input.forEach(element => {
        if (element === "add") {
            arr.push(counter)
            counter++
        } else {
            arr.pop()
            counter++
        }
    });

    if (arr.length === 0) {
        console.log("Empty")
    }

    for (const number of arr) {
        console.log(number)
    }
}

// 4.	Rotate Array
// Write a JS function that rotates an array. The array should be rotated to the right side, meaning that the last element should become the first, upon rotation. 
// The input comes as array of strings. The last element of the array is the amount of rotation you need to perform.
// The output is the resulted array after the rotations. The elements should be printed on one line, separated by a single space.

function rotateArray(input) {
    let a = input.pop()
    let currentElement = ""
    let step = a % input.length
    for (let index = 0; index < step; index++) {
        currentElement = input.pop()
        input.unshift(currentElement)
    }

    console.log(input.join(' '))
}

// 5.	Extract an Non-decreasing Subsequence from an Array
// Write a JS function that extracts only those numbers that form a non-decreasing subsequence. In other words, you start from the first element and continue to the end of the given array of numbers. Any number which is LESS THAN the current biggest one is ignored, alternatively if it’s equal or higher than the current biggest one you set it as the current biggest one and you continue to the next number. 
// The input comes as array of numbers.
// The output is the processed array after the filtration, which should be a non-decreasing subsequence. Each element should be printed on a new line.

function extractAnNonDescreasingSubsequanceFromAnArray(input) {
    let lastBiggestNumber = 0

    for (let index = 0; index < input.length; index++) {
        if (lastBiggestNumber <= input[index]) {
            console.log(input[index])
            lastBiggestNumber = input[index]
        }
    }
}

// 6.	Sort an Array by 2 Criteria
// Write a JS function that orders a given array of strings, by length in ascending order as primary criteria, and by alphabetical value in ascending order as second criteria. The comparison should be case-insensitive.
// The input comes as array of strings.
// The output is the ordered array of strings.

function sortAnArrayBy2criteria(input) {
    input.sort(function(a, b) {
        return a.length - b.length || a.localeCompare(b)
      })
      
    input.forEach(element => {
        console.log(element)
    })
}

// 7.	Magic Matrices
// Write a JS function that checks if a given matrix of numbers is magical. A matrix is magical if the sums of the cells of every row and every column are equal. 
// The input comes as an array of arrays, containing numbers (number 2D matrix). The input numbers will always be positive.
// The output is a Boolean result indicating whether the matrix is magical or not.

function magicMatrices(arr) {
    let matrix = arr;
    let magic = [];
      
    // sums of rows
    let rowSum = matrix.map(r => r.reduce((a, b) => a + b));
    // sums of columns
    let colSum = matrix.reduce((a, b) => a.map((x, i) => x + b[i]));
    
    magic = Array.from(new Set(rowSum));
    magic = Array.from(new Set(colSum));

    if (magic.length === 1) {
        console.log('true');
        
    } else {
        console.log('false');
    }
}

// 8.	*Spiral Matrix
// Write a JS function that generates a Spirally-filled matrix with numbers, with given dimensions.
// The input comes as 2 numbers that represent the dimension of the matrix. 
// The output is the matrix filled spirally starting from 1. You need to print every row on a new line, with the cells separated by a space. Check the examples below. 


function spiralMatrix(input) {
    
}
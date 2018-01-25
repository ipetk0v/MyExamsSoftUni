// 1.	Sum First Last
// Write a JS function that calculates and prints the sum of the first and the last elements in an array.
// The input comes as array of string elements holding numbers.
// The output is the return value of your function.

function sumFirstLast(input) {
    console.log(Number(input[0]) + Number(input[input.length - 1]))
}


// 2.	Even Position Element
// Write a JS function that finds the elements at even positions in an array.
// The input comes as array of string elements.
// The output is the return value of your function. Collect all elements in a string, separated by space.

function evenPositionElement(input) {
    result = "";
    for (let index = 0; index < input.length; index += 2) {
        result += input[index]
    }
    result.forEach(element => {
        console.log(element.join(' '))
    });
}

// 3.	Negative / Positive Numbers
// Write a JS function that processes the elements in an array one by one and produces a new array. Prepend each negative element at the front of the result and append each positive (or 0) element at the end of the result.
// The input comes as array of number elements.
// The output is printed on the console, each element on a new line.

function negativePositiveNumbers(input) {
    let result = []

    input.forEach(element => {
        if (element < 0) {
            result.unshift(element)
        } else {
            result.push(element)
        }
    }) 

    for (const element of result) {
        console.log(element)
    }
}

// 4.	First and Last K Numbers
// Write a JS function that prints the first k and the last k elements from an array of numbers.
// The input comes as array of number elements. The first element represents the number k, all other elements are from the array that needs to be processed.
// The output is printed on the console on two lines. On the first line print the first k elements, separated by space. On the second line print the last k elements, separated by space.

function firstAndLastKnumbers(input) {
    let n = Number(input.shift())
    console.log(input.slice(0,n))
    console.log(input.slice(input.length -n))
}

// 5.	Last K Numbers Sequence
// You are given two integers n and k. Write a JS function that generates and prints the following sequence:
// •	The first element is 1
// •	Every following element equals the sum of the previous k elements
// •	The length of the sequence is n elements
// The input comes as two number arguments. The first element represents the number n, and the second – the number k.
// The output is printed on the console on a single line, separated by space.

function lastKnumbersSequence(n,k) {
    let result = [1]

    for (let index = 1; index < n; index++) {
        result[index] = result
        .slice(Math.max(0,result.length - k),index + k)
        .reduce((a,b) => {return a + b},0)
    }

    console.log(result)
}

// 6.	Process Odd Numbers
// You are given an array of numbers. Write a JS function that prints the elements at odd positions from the array, doubled and in reverse order.
// The input comes as array of number elements.
// The output is printed on the console on a single line, separated by space.

function processOddNumbers(input) {
    let result = []

    input.forEach((element,i) => {
        if (i % 2 == 1) {
            result.unshift(element * 2)
        }
    })

    console.log(result.join(' '))
}

// 7.	Smallest Two Numbers
// Write a JS function that prints the two smallest elements from an array of numbers.
// The input comes as array of number elements.
// The output is printed on the console on a single line, separated by space.

function smallestTwoNumebrs(input) {
    let result = []
    input.forEach((element,i) => {
        result[i] = input[i]
    })

    let a = result.sort((a,b) => a-b)
    result = result.slice(0,2)
    console.log(result.join(' '))
}

// 8.	Biggest Element
// Write a JS function that finds the biggest element inside a matrix.
// The input comes as array of arrays, containing number elements (2D matrix of numbers).
// The output is the return value of your function. Find the biggest element and return it.

function biggestElement(matrix) {
    console.log(
        matrix.map(arr => arr.sort((a,b) => a < b)[0])
        .sort((a,b) => a < b)[0]
    )
}

// 9.	Diagonal Sums
// A square matrix of numbers comes as an array of strings, each string holding numbers (space separated). Write a JS function that finds the sum at the main and at the secondary diagonals.
// The input comes as array of arrays, containing number elements (2D matrix of numbers).
// The output is printed on the console, on a single line separated by space. First print the sum at the main diagonal, then the sum at the secondary diagonal.

function diagonalSums(matrix) {
    let colLenght = matrix.length
    let leftRightDiagonal = 0
    let rightLeftDiagonal = 0

    for (let row = 0; row < colLenght; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            let number = matrix[row][col]
            if (col === row) {
                leftRightDiagonal += number
            }
            if (matrix[row].length - row === col + 1){
                rightLeftDiagonal += number
            }
        }        
    }
    console.log(leftRightDiagonal.toString() + " " + rightLeftDiagonal.toString())
}

// 10.	Equal Neighbors
// Write a JS function that finds the number of equal neighbor pairs inside a matrix of variable size and type (numbers or strings).
// The input comes as array of arrays, containing string elements (2D matrix of strings).
// The output is return value of you function. Save the number of equal pairs you find and return it.

function equalNeighbors(matrix) {
    let counter = 0
    for (let row = 0; row < matrix.length; row++) {
       for (let col = 0; col < matrix[row].length; col++) {
            if (row + 1 < matrix.length) {
                if (matrix[row][col] === matrix[row + 1][col]) {
                    counter++
                }
            }
            if (col + 1 < matrix[row].length) {
                if (matrix[row][col] === matrix[row][col + 1]) {
                    counter++
                }
            }
       }        
    }
    console.log(counter)
}

equalNeighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']])
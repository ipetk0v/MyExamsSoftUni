// 1.	Triangle of Stars
// Write a JS function that outputs a triangle made of stars with variable size, depending on an input parameter. Look at the examples to get an idea.
// The input comes as a single number argument.
// The output is a series of lines printed on the console, forming a triangle of variable size.

function triangleOfStars(num) {
    
    top(num)
    down(num)

    function top(num) {
        for (let index = 1; index <= num; index++) {
            draw(index)
        }
    }
    function down(num) {
        for (let index = num - 1; index >= 1; index--) {
            draw(index)            
        }
    }
    function draw(index) {
        console.log("*".repeat(index))
    }
}

// 2.	Square of Stars
// Write a JS function that outputs a rectangle made of stars with variable size, depending on an input parameter. If there is no parameter specified, the rectangle should always be of size 5. Look at the examples to get an idea.
// The input comes as a single number argument.
// The output is a series of lines printed on the console, forming a rectangle of variable size

function squareOfStars(num) {

    for (let index = 1; index <= num; index++) {
        draw(num)        
    }
    function draw(index) {
        console.log("* ".repeat(index))
    }
}

// 3.	Palindrome
// Write a JS function that checks if an input string is a palindrome.
// The input comes as a single string argument.
// The output is the return value of your function. It should be true if the string is a palindrome and false if it’s not.

function palindrome(input) {

    console.log(checkPalindrom(input))

    function checkPalindrom(str) {
        if (str == str.split('').reverse().join('')) {
            return true
        } 
        return false
    }
}

// 4.	Day of the Week
// Write a JS function that prints a number between 1 and 7 when a day of the week is passed to it as a string and an error message if the string is not recognized.
// The input comes as a single string argument.
// The output should be returned as a result of your program.

function dayOfTheWeek(inputDay) {
    
    console.log(returnDay(inputDay))

    function returnDay(day) {
        switch (day) {
            case "Monday":
                return 1
                break;
            case "Tuesday":
                return 2
                break;
            case "Wednesday":
                return 3
                break;
            case "Thursday":
                return 4
                break;
            case "Friday":
                return 5
                break;
            case "Saturday":
                return 6
                break;
            case "Sunday":
                return 7
                break;
            default:
                return "error"
                break;
        }
    }
}

// 5.	Functional Calculator
// Write a JS program that receives two variables and an operator and performs a calculation between the variables, using the operator. Store the different functions in variables and pass them to your calculator.
// The input comes as three arguments – two numbers, and a string, representing the operator.
// The output should be printed on the console.

function functionalCalculator(num1,num2,operator) {
    console.log(receives(num1,num2,operator))

    function receives(num1,num2,operator) {
        switch (operator) {
            case "+":
            return num1 + num2
                break;
                case "-":
            return num1 - num2
                break;
                case "*":
            return num1 * num2
                break;
                case "/":
            return num1 / num2
                break;
            default:
                break;
        }
    }
}

// 6.	Aggregate Elements
// Write a JS program that performs and outputs different operations on an array of elements. Implement the following operations:
// •	Sum(ai) - calculates the sum all elements from the input array
// •	Sum(1/ai) - calculates the sum of the inverse values (1/ai) of all elements from the array
// •	Concat(ai) - concatenates the string representations of all elements from the array
// The input comes as an array of number elements.
// The output should be printed on the console on a new line for each of the operations.

function aggregateElements(input) {
    
    console.log(sum(input))
    console.log(aggregate(input, 0, (a, b)=>a + 1 / b))
    console.log(concat(input))

    function sum(input) {
        let sum = 0
        input.forEach(element => {
            sum += element
        })
        return sum
    }
    function aggregate(arr, initVal, func) {
        let val = initVal;
        for (let i = 0; i < arr.length; i++) {
            val = func(val, arr[i]);
        }
        return(val);
    }
    function concat(input) {
        let concat = ""
        input.forEach(element => {
            concat += element
        })
        return concat
    }
}

// 7.	*Words Uppercase
// Write a JS program that extracts all words from a passed in string and converts them to upper case. The extracted words in upper case must be printed back on a single line concatenated by “, “.
// The input comes as a single string argument - the text from which to extract and convert the words.
// The output should be a single line containing the converted string.

function wordsUppercase(str) {
    let strUpper = str.toUpperCase();
    let words = extractWords();
    words = words.filter(w=>w != "");
    function extractWords() {
        return strUpper.split(/\W+/);
    }
    console.log(words.join(", "))
}
 

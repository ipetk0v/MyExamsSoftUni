// 1.	Sum 3 Numbers
// Write a JS function that takes three numbers as input and outputs their sum.
// The input comes as three number arguments passed to your function.
// The output should be printed to the console.

function sumNumbers(num1, num2, num3) {
    console.log(num1+num2+num3)
}

// 2.	Sum And VAT
// Write a JS function that sums a variable number of prices and calculates their VAT (Value Add Tax, 20%).
// The input comes as an array of numbers. The number of elements will be different every time.
// The output should be printed to the console on a new line for every entry.

function sumAndVat(input) {
    let sum = 0
    for (let number of input) {
        sum += number
    }
    console.log(sum)
    console.log(sum * 0.20)
    console.log(sum * 1.20)
}

// 3.	Letter Occurrences in String
// Write a JS function that counts how many times a specific letter occurs in a given string.
// The input comes two string arguments. The first element is the string to check and the second element is the letter to count.
// The output should be returned as a result of your function.

function letterOccurencesInString(input,letter) {
    let counter = 0;

    for (let i = 0; i < input.length; i++) {
        if(input[i] === letter){
            counter++
        }
    }

    console.log(counter)
}

// 4.	Filter By Age
// Write a JS function that stores the name and age of two persons in objects and then filters them by minimum age.
// The input comes as five arguments. The first element is the minimum age. The second and third elements are the name and age of the first person and the fourth and fifth elements – the name and age of the second person. The three age parameters will be numbers, the names will be strings.
// The output should be printed to the console.

    function filterByAge(minAge,firstName,firstAge,secondName,secondAge) {
        let firstMan = {name: firstName, age: firstAge}
        let secondMan = {name: secondName, age: secondAge}

        if (firstMan.age >= minAge) {
            console.log(firstMan)
        }         
        if (secondMan.age >= minAge) {
            console.log(secondMan)
        }        
    }

// 5.	String of Numbers 1…N
// Write a JS function that read a number n as input and prints all numbers from 1 to n, concatenated as a single string.
// The input comes as one string element that needs to be parsed as a number.
// The output should be returned as a result of your function.

function stringOfNumbers(stringNum) {
    let num = Number.parseInt(stringNum)
    let result = "";
    for (let i = 1; i <= num; i++) {
        result += i        
    }
    console.log(result)
}
    
// 6.	Figure Area
// Write a JS function that calculates the area of the figure on the right by given values for w, h, W and H. The lower right corner is always common for the two rectangles.
// The input comes as four number parameters w, h, W and H.
// The output should be returned as a result of your function.

function figureArea(w,h,W,H) {
    let [s1,s2,s3] = [w*h,W*H,Math.min(w,W)*Math.min(h,H)]
    console.log(s1 + s2 - s3)
}

// 7.	Next Day
// Write a JS function that calculates the date of the next day by given year, month and day.
// The input comes as three number parameters. The first element is the year, the second is the month and the third is the day.
// The output should be returned as a result of your function.

function nextDay(yearInput, monthInput, dayInput) {
    let date=new Date(yearInput, monthInput-1,dayInput);
    let tomorrow=new Date(yearInput,monthInput-1,date.getDate()+1);
    console.log(`${tomorrow.getFullYear()}-${tomorrow.getMonth()+1}-${tomorrow.getDate()}`);

}

// 8.	Distance between Points
// Write a JS function that calculates the distance between two points by given x and y coordinates. Use objects to store the two points.
// The input comes as four number elements in the format x1, y1, x2, y2. Each pair of elements are the coordinates of a point in 2D space.
// The output should be returned as a result of your function.

function distanceBetweenPoints(x1,y1,x2,y2) {
    let a = x1 - x2
    let b = y1 - y2
    let result = Math.sqrt( a*a + b*b )
    console.log(result)
}

distanceBetweenPoints(2, 4, 5, 0)
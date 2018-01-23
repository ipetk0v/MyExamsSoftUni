// 1.	Hello, JavaScript!
// Write a JS function that can receive a name as input and print a greeting to the console.
// The input comes as a single string that is the name of the person.
// The output should be printed to the console.

function nameWriter(name) {
    console.log("Hello, %s, I am JavaScript!",name)
}

// 2.	Area and Perimeter
// Write a JS function that calculates the area and perimeter of a rectangle by given two sides.
// The input comes as 2 numbers that are the lengths of the 2 sides of the rectangle (sideA and sideB)
// The output should be printed to the console on two lines.

function areaAndPerimeter(sideA, sideB) {
    let area = sideA * sideB
    let perimeter = (2 * sideA) + (2 * sideB)
    console.log(area)
    console.log(perimeter)
}

// 3.	Distance over Time
// Two objects start from point A and travel in the same direction at constant speeds V1 and V2 for a period T. Write a JS function that calculates the distance between the two object at the end of the period.
// The input comes as array of numbers. The first two elements are the speeds to the two objects in km/h and the third element is the time in seconds.
// The output should be printed to the console. Calculate the distance in meters.

function distanceOverTime(input) {
    let v1 = Number(input[0])
    let v2 = Number(input[1])
    let t = Number(input[2])

    let s1 = v1 * t
    let s2 = v2 * t

    let result = (Math.abs((s1 - s2)) / 3600) * 1000
    console.log(result)
}

// 4.	Distance in 3D
// Write a JS function that calculates the distance between the two points in 3D by given coordinates.
// The input comes as an array of numbers. The first three elements are the x, y and z coordinates for the first point and the second set of arguments are the coordinates of the other point.
// The output should be printed to the console.

function distanceIn3d(input) {
    let x1 = Number(input[0])
    let y1 = Number(input[1])
    let z1 = Number(input[2])
    let x2 = Number(input[3])
    let y2 = Number(input[4])
    let z2 = Number(input[5])
    d = Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1)+(z2-z1)*(z2-z1))
    console.log(d)
}

// 5.Grads to Degrees
// Land surveyors use grads (also known as gon, 400 grads in a full turn) in their documents. Grads are rather unwieldy though, so you need to write a JS function that converts from grads to degrees. In addition, your program needs to constrain the results within the range 0°≤x<360°, so if you arrive at a value like -15°, it needs to be converted to 345° and 420° becomes 60°.
// The input comes as single number.
// The output should be printed to the console.

function gradsToDegrees(input) {
    let grads = Number(input);
 
    grads = grads % 400;

    if (grads < 0) {
        grads += 400;
    }

    let degrees = grads / 400 * 360;
    console.log(degrees);
}

// 6.	Compound Interest
// Write a JS function that calculates the total accumulated value for a monetary deposit by given principal sum, interest rate, compounding frequency and overall length.
// The input comes as an array of numbers. The first value is the principal sum, the second is the interest rate in percent, the third is the compounding period in months and the final value is the total timespan, given in years.
// The output should be printed to the console, with two decimal places.

function compoundInterest([principal, interest, period, time]) {
    [principal, interest, period, time]=[principal, interest, period, time].map(Number);
 
    interest /= 100;
    let frequency = 12 / period;
 
    let total = principal * Math.pow(1 + interest / frequency, frequency * time);
 
    console.log(total.toFixed(2)); 
}
 
// 7.	*Rounding
// Write a JS function that rounds numbers to specific precision.
// The input comes as an array of two numbers. The first value is the number to be rounded and the second is the precision (significant decimal places). If a precision is passed, that is more than 15 it should automatically be reduced to 15.
// The output should be printed to the console. Do not print insignificant decimals.

function Rounding(input) {
    let num = Number(input[0])
    let roundNum = Number(input[1])

    if (roundNum > 15) {
        roundNum = 15
    }
    let result = parseFloat(num.toFixed(roundNum))
    console.log(result)
}

// 8.	Imperial Units
// Imperial units are confusing, but still in use in some backwards countries (Myanmar, Liberia and the United States are the only countries still using them). They are so confusing in fact, that native users struggle to convert between them. Write a JS function that converts from inches to feet and inches. There are 12 inches in a foot. See the example for formatting details.
// The input comes as a single number.
// The output should be printed to the console.

function imperialUnits(inches) {
    let feetFromInches = Math.floor(inches / 12)
    let inchesRemainder = inches % 12
 
    let result = feetFromInches + "'-" + inchesRemainder + "\""
    console.log(result)
}

// 9.	Now Playing
// Write a JS function that displays information about the currently playing musical track.
// The input comes as an array of string elements. The first element is the name of the track, the second is the name of the artist performing and the third is the duration in minutes and seconds.
// The output should be printed to the console in the following format:
// Now Playing: {artist name} - {track name} [{duration}]

function nowPlaying(input) {
    let trackName = input[0]
    let artistName = input[1]
    let duration = input[2]

    console.log("Now Playing: %s - %s [%s]",artistName,trackName,duration)
}

// 10.	Compose Tag
// Write a JS function that composes an HTML image tag.
// The input comes as an array of string elements. The first element is the location of the file and the second is the alternate text.
// The output should be printed to the console in the following format:
// <img src="{file location}" alt="{alternate text}">

function composeTag(input) {
    let fileLocation = input[0]
    let alternateText = input[1]

    console.log("<img src=\"%s\" alt=\"%s\">",fileLocation,alternateText)
}

// 11.	Binary to Decimal
// Write a JS function that reads an 8-bit binary number and converts it to a decimal.
// The input comes as one string element, representing a binary number.
// The output should be printed to the console.

function binaryToDecimal(binary) {
    console.log(parseInt(binary,2))
}

// 12.	Assign Properties
// Write a JS function that composes an object by given properties. There will be 3 sets of property-value pairs (a total of 6 elements). Assign each value to its respective property of an object and return the object as a result of the function.
// The input comes as an array of string elements.
// The output should be returned as a value.

function assignProperties(input) {
    let [prop1,value1,prop2,value2,prop3,value3]=input;
    
    let obj = {};
    obj[prop1] = value1;
    obj[prop2] = value2;
    obj[prop3] = value3;

    console.log(obj)
}

// 13.	*Last Month
// Write a JS function that receives a date as array of strings containing day, month and year in that order. Your task is to print the last day of previous month (the month BEFORE the given date). Check the examples to better understand the problem.
// The input comes as an array of numbers.
// The output should be a single number representing the last day of the previous month.

function lastMonth(input) {
    let day = input[0]
    let month = input[1] - 2
    let year = input[2]
    let date = new Date(year,month,day)
    var days = [];
     while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
     }
     let lastIndex = days.length - 1
     console.log(days[lastIndex].getDate())
}

// 14.	Biggest of 3 Numbers
// Write a JS function that finds the biggest of 3 numbers.
// The input comes as array of 3 numbers.
// The output is the biggest from the input numbers.

function biggestOfThreeNumbers(input) {
    let num1 = Number(input[0])
    let num2 = Number(input[1])
    let num3 = Number(input[2])

    let result = Math.max(num1,num2,num3)
    console.log(result)
}

// 15.	Point in Rectangle
// Write a JS function that takes as input 6 numbers x, y, xMin, xMax, yMin, yMax and prints whether the point {x, y} is inside the rectangle or outside of it. If the point is at the rectangle border, it is considered inside.
// The input comes as array of numbers. Its holds the representations of x, y, xMin, xMax, yMin, yMax. All numbers will in the range [-1 000 000 … 1 000 000]. It is guaranteed that xMin < xMax and yMin < yMax.
// The output is a single line holding “inside” or “outside”.

function pointInRectangle(input) {
    let [x, y, xMin, xMax, yMin, yMax] = input

    if ((x >= xMin && x <= xMax) &&
        (y >= yMin && y <= yMax)) {
        console.log("inside")
    } else {
        console.log("outside")
    }
}

// 16.	Odd Numbers 1 to N
// Write a JS function that reads an integer n and prints all odd numbers from 1 to n.
// The input comes as a single number n. The number n will be an integer in the range [1 … 100 000].
// The output should hold the expected odd numbers, each at a separate line.

function oddNumbers(num) {
    for (let index = 1; index <= num; index++) {     
        if (index % 2 === 1) {
            console.log(index)
        }   
    }
}

// 17.	Triangle of Dollars
// Write a JS function that prints a triangle of n lines of “$” characters like shown in the examples.
// The input comes as a single number n (0 < n < 100).
// The output consists of n text lines like shown below.

function triangleOfDollars(num) {
    for (let index = 1; index <= num; index++) {
        console.log("$".repeat(index))
    }
}

// Movie ticket prices in a big retro-cinema depend on the movie title and on the day of week as shown below: 
// Movie Title	Monday	Tuesday	Wednesday	Thursday	Friday	Saturday	Sunday
// The Godfather	12	10	15	12.50	15	25	30
// Schindler's List	8.50	8.50	8.50	8.50	8.50	15	15
// Casablanca	8	8	8	8	8	10	10
// The Wizard of Oz	10	10	10	10	10	15	15
// Write a JS function that calculate the ticket price by movie title and day of week.
// The input comes as array of 2 strings. The first string holds the movie title. The second string holds the day of week.
// The output should hold the ticket price or “error” if the title or day of week is invalid.

function movieTicketPrices(input) {
    // data
    let theGodfather = {name: "the godfather", day: {monday: 12, tuesday: 10, wednesday: 15,thursday: 12.50,friday: 15,saturday: 25, sunday: 30}}
    let schindlersList = {name: "schindler's list", day: {monday: 8.50, tuesday: 8.50, wednesday: 8.50,thursday: 8.50,friday: 8.50,saturday: 15, sunday: 15}}
    let casablanca = {name: "casablanca", day: {monday: 8, tuesday: 8, wednesday: 8,thursday: 8,friday: 8,saturday: 10, sunday: 10}}
    let theWizardOfOz = {name: "the wizard of oz", day: {monday: 10, tuesday: 10, wednesday: 10,thursday: 10,friday: 10,saturday: 15, sunday: 15}}

    let listOfFilms = [theGodfather,schindlersList,casablanca,theWizardOfOz]
    // input
    let film = String(input[0]).toLowerCase()
    let day = String(input[1]).toLowerCase()

    // logical
        let result = listOfFilms.find(function (obj) { return obj.name === film})
       
        switch (day) {
            case "monday":
                console.log(result.day.monday)
                break;
            case "tuesday":
                console.log(result.day.tuesday)
                break;
            case "wednesday":
                console.log(result.day.wednesday)
                break;
            case "thursday":
                console.log(result.day.thursday)
                break;
            case "friday":
                console.log(result.day.friday)
                break;
            case "saturday":
                console.log(result.day.saturday)
                break;
            case "sunday":
                console.log(result.day.sunday)
                break;
            default:
                console.log("error")
                break;
        }
}

// 19.	Quadratic Equation
// Write a JS function to solve a quadratic equation by given in standard form as its coefficients: a, b, c. You may learn more about quadratic equations here: https://www.mathsisfun.com/algebra/quadratic-equation.html.
// The input comes as 3 numbers a, b and c. The value of a will be non-zero.
// The output depends on the equation:
// •	It holds two numbers x1 and x2 if the equation has two different solutions (roots): x1 and x2.
// o	First print the smaller root, then the greater.
// •	It holds a single number x if the equation has only one solution (root): x.
// •	It holds the text “No” if the equation has no solutions (no real roots).

function quandraticEquation(a,b,c) {
    let result = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    let result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    if (result === result2 ) {
        console.log(result)
        return
    }
    if (result.toString() !== "NaN" && result2.toString() !== "NaN") {
        console.log(result2)
        console.log(result)
    } else {
        console.log("no")
    }

}

// 20.	Multiplication Table
// Write a JS function to print a math multiplication table of size n, formatted as HTML table.
// The input comes as a single number n (0 < n < 100).
// The output consists of n+3 text lines like shown below.

function multiplicationTable(number) {
    number = Number(number);
    let html = "";
    html += '<table border="1">\n';
    html += '\t<tr><th>x</th>';

    for(let i = 1; i<= number; i++) {
        html += `<th>${i}</th>`;
    }

    html += '</tr>\n';

    for(let i=1; i <= number; i++) {
        html += `\t<tr><th>${i}</th>`;

        for(let j=1; j<= number; j++) {
            html += `<td>${i * j}</td>`
        }

        html += '</tr>\n';
    }

    html += '</table>\n';

    console.log(html);
}

// 21.	Figure of 4 Squares
// Write a JS function to print a figure of 4 squares of size n like shown in the examples below.
// The input is an integer number n in the range [2 … 200].
// The output consists of n lines for odd n and n-1 lines for even n. Each line holds 2*n-1 characters (+ or | or space) as shown in the examples. The figure is fully symmetric (horizontally and vertically).

function figureOf4squares(n) {
    let r = ' ';
    n = Number(n);
    let space = (2 * n - 4) / 2;
    if(n % 2 == 0) {
        for (let i = 1; i <= 2; i++) {
            console.log(r = '+' + '-'.repeat(space) + '+' + '-'.repeat(space) + '+');
            for (let m = 1; m <= (n / 2) - 2; m++){
                console.log(r = '|' + ' '.repeat(n - 2) + '|' + ' '.repeat(n - 2) + '|');
            }
        }
        console.log(r = '+' + '-'.repeat(space) + '+' + '-'.repeat(space) + '+');
    }
    else{
        for (let i = 1; i <= 2; i++) {
            console.log(r = '+' + '-'.repeat(space) + '+' + '-'.repeat(space) + '+');
            for (let m = 1; m <= (n / 2) - 1; m++){
                console.log(r = '|' + ' '.repeat(n - 2) + '|' + ' '.repeat(n - 2) + '|');
            }
        }
        console.log(r = '+' + '-'.repeat(space) + '+' + '-'.repeat(space) + '+');
    }
}

figureOf4squares(4)
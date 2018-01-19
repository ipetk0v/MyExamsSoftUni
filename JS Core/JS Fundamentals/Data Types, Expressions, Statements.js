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

assignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male'])

// 1.	Inside Volume
// Write a JS function that determines whether a point is inside the volume, defined by the box, shown on the right.
// The input comes as an array of numbers. Each set of 3 elements are the x, y and z coordinates of a point.
// The output should be printed to the console on a new line for each point. Print inside if the point lies inside the volume and outisde otherwise.

function insideVolume(input) {
    for (let index = 0; index < input.length; index += 3) {
        let x = input[index]
        let y = input[index + 1]
        let z = input[index + 2]

        if (inVolume(x,y,z)) {
            console.log("inside")
        } else {
            console.log("outside")
        }
    }

    function inVolume(x,y,z) {
        let x1 = 10, x2 = 50
        let y1 = 20, y2 = 80
        let z1 = 15, z2 = 50

        if (x >= x1 && x <= x2) {
            if (y >= y1 && y <= y2) {
                if (z >= z1 && z <= z2) {
                    return true
                }
            }
        }
        return false
    }
}

// 2.	Road Radar
// Write a JS function that determines whether a driver is within the speed limit. You will receive his speed and the area where he’s driving. Each area has a different limit: on the motorway the limit is 130 km/h, on the interstate the limit is 90, inside a city the limit is 50 and within a residential area the limit is 20 km/h. If the driver is within the limits, your function prints nothing. If he’s over the limit however, your function prints the severity of the infraction. For speeds up to 20 km/h over the limit, he’s speeding; for speeds up to 40 over the limit, the infraction is excessive speeding and for anything else, reckless driving.
// The input comes as an array of elements. The first element is the current speed (as number), the second element is the area where the vehicle is driving.
// The output should be printed to the console. Note in certain cases there will be no output.

function roadRader(input) {
    let speed = input[0]
    let limit = getLimitSpeed(input[1])

    function getLimitSpeed(zone) {
        switch (zone) {
            case "motorway": return 130
            case "interstate": return 90
            case "city": return 50
            case "residential": return 20
        }
    }

    let result = speed - limit

    if (result > 0 && result <= 20) {
        console.log("speeding")
    } else if (result > 20 && result <= 40) {
        console.log("excessive speeding")
    } else if (result > 40) {
        console.log("reckless driving")
    }
}

// 3.	Template format
// Write a JS program that receives data about a quiz and prints it formatted as an XML document. The data comes as pairs of question-answer entries. The format of the document should be as follows:
// XML
// <?xml version="1.0" encoding="UTF-8"?>
// <quiz>
//   <question>
//     {question text}
//   </question>
//   <answer>
//     {answer text}
//   </answer>
// </quiz>
// The input comes as an array of string elements.
// The output should be printed on the console.

function templateFormat(input) {
    let result = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
    "<quiz>\n"

    for (let index = 0; index < input.length; index += 2) {
        let questionText = input[index]
        let answerText = input[index + 1]
            result += "  <question>\n" +
            "    " + questionText + "\n" +
            "  </question>\n" +
            "  <answer>\n" +
            "    " + answerText + "\n" +
            "  </answer>\n"        
    }
    result += "</quiz>"
    console.log(result)
}

// 4.	Cooking by Numbers
// Write a JS program that receives a number and a list of five operations. Perform the operations in sequence by starting with the input number and using the result of every operation as starting point for the next. Print the result of every operation in order. The operations can be one of the following:
// •	chop – divide the number by two
// •	dice – square root of number
// •	spice – add 1 to number
// •	bake – multiply number by 3
// •	fillet – subtract 20% from number
// The input comes as an array of 6 string elements. The first element is your starting point and must be parsed to a number. The remaining 5 elements are the names of operations to be performed.
// The output should be printed on the console.

function cookingByNumbers(params) {
    let number = params[0]

    for (let index = 1; index < params.length; index++) {
        let command = params[index]
        switch (command) {
            case "chop": 
                 console.log(number /= 2)                
                break;     
            case "dice": 
                 console.log(number = Math.sqrt(number))
                break;     
            case "spice": 
                 console.log(number += 1)                
                break;     
            case "bake": 
                 console.log(number *= 3)               
                break;     
            case "fillet": 
                 console.log(number -= (number * 0.2))          
                break;
        }        
    }
}

// 5.	Modify Average
// Write a JS program that modifies a number until the average value of all of its digits is higher than 5. In order to modify the number, your program should append a 9 to the end of the number, when the average value of all of its digits is higher than 5 the program should stop appending. If the number’s average value of all of its digits is already higher than 5, no appending should be done.
// The input is a single number.
// The output should consist of a single number - the final modified number which has an average value of all of its digits higher than 5. The output should be printed on the console.

function modifyAverage(number) {
    number = number.toString()

    while (checkAverageValue(number) <= 5) {
        number += 9
    }

    console.log(number)

    function checkAverageValue(number) {
        let total = 0;
        for (let index = 0; index < number.length; index++) {
            total += Number(number[index])
        }
        return total / number.length
    }
}

modifyAverage(5835)
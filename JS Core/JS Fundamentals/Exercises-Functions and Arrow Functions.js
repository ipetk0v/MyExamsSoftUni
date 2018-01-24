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

// 6.	Validity Checker
// Write a JS program that receives two points in the format [x1, y1, x2, y2] and checks if the distances between each point and the start of the cartesian coordinate system (0, 0) and between the points themselves is valid. A distance between two points is considered valid, if it is an integer value. In case a distance is valid write "{x1, y1} to {x2, y2} is valid", in case the distance is invalid write "{x1, y1} to {x2, y2} is invalid". 
// The order of comparisons should always be first {x1, y1} to {0, 0}, then {x2, y2} to {0, 0} and finally {x1, y1} to {x2, y2}. 
// The input consists of two points given as an array of numbers.
// For each comparison print on the output either "{x1, y1} to {x2, y2} is valid" if the distance between them is valid, or "{x1, y1} to {x2, y2} is invalid"- if it’s invalid.

function validityChecker(input) {
    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let x2 = Number(input[2]);
    let y2 = Number(input[3]);
 
    function distance(x1, y1, x2, y2) {
        let distH = x1 - x2;
        let distY = y1 - y2;
        return Math.sqrt(distH**2 + distY**2);
    }

    if (Number.isInteger(distance(x1, y1, 0, 0))) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
 
    if (Number.isInteger(distance(x2, y2, 0, 0))) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
 
    if (Number.isInteger(distance(x1, y1, x2, y2))) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

// 7.	Treasure Locator
// You will be given a series of coordinates, leading to a buried treasure. Use the map to the right to write a program that locates on which island it is. After you find where all the treasure chests are, compose a list and print it on the console. If a chest is not on any of the islands, print “On the bottom of the ocean” to inform your treasure-hunting team to bring diving gear. If the location is on the shore (border) of the island, it’s still considered to lie inside.
// The input comes as an array with a variable number of elements that are numbers. Each pair is the coordinates to a buried treasure chest.
// The output is a list of the locations of every treasure chest, either the name of an island or “On the bottom of the ocean”, printed on the console.

function treasureLocator(input) {
    for (let index = 0; index < input.length; index += 2) {
        let y = input[index]
        let x = input[index + 1]

        checkLocation(x,y)
    }

    function checkLocation(x,y) {
        if ((y >= 8 && y <= 9) && (x <= 0 && x >= 1)) {
            console.log("Tokelou")
        } else if ((y >= 1 && y <= 3) && (x >= 1 && x <= 3)){
            console.log("Tuvalu")
        } else if ((y >= 5 && y <= 7) && (x >= 3 && x <= 6)){
            console.log("Samoa")
        } else if ((y >= 0 && y <= 2) && (x >= 6 && x <= 8)){
            console.log("Tonga")
        } else if ((y >= 4 && y <= 9) && (x >= 7 && x <= 8)){
            console.log("Cook")
        } else {
            console.log("On the bottom of the ocean")
        }
    }
}

// 8.	Trip Length
// You will be given the coordinates of 3 points on a 2D plane. Write a program that finds the two shortest segments that connect them (without going back to the starting point). When determining the listing order, use the order with the lowest numerical value (see the figure in the hints for more information).
// The input comes as an array of 6 numbers. The order is [x1, y1, x2, y2, x3, y3].
// The output is the return value of your program as a string, representing the order in which the three points must be visited and the final distance between them. See the examples for more info.


function tripLength(input) {
    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let x2 = Number(input[2]);
    let y2 = Number(input[3]);
    let x3 = Number(input[4]);
    let y3 = Number(input[5]);
 
    let distance12 = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    let distance23 = Math.sqrt(Math.pow((x3 - x2), 2) + Math.pow((y3 - y2), 2));
    let distance13 = Math.sqrt(Math.pow((x3 - x1), 2) + Math.pow((y3 - y1), 2));
 
 
    if ((distance12 <= distance13) && (distance13 => distance23)) {
       let a = distance12 + distance23;
        console.log('1->2->3: ' + a);
    }
    else if ((distance12 <= distance23) && (distance13 < distance23)) {
        let b = distance13 + distance12;
        console.log('2->1->3: '+ b);
    }
    else {
        let c = distance23 + distance13;
        console.log('1->3->2: ' + c);
    }
 
}

// 9.	*Radio Crystals
// It’s time to put your skills to work for the war effort – creating management software for a radio transmitter factory. Radios require a finely tuned quartz crystal in order to operate at the correct frequency. The resource used to produce them is quartz ore that comes in big chunks and needs to undergo several processes, before it reaches the desired properties.
// You need to write a JS program that monitors the current thickness of the crystal and recommends the next procedure that will bring it closer to the desired frequency. To reduce waste and the time it takes to make each crystal your program needs to complete the process with the least number of operations. Each operation takes the same amount of time, but since they are done at different parts of the factory, the crystals have to be transported and thoroughly washed every time an operation different from the previous must be performed, so this must also be taken into account. When determining the order, always attempt to start from the operation that removes the largest amount of material.
// The different operations you can perform are the following:
// •	Cut – cuts the crystal in 4
// •	Lap – removes 20% of the crystal’s thickness
// •	Grind – removes 20 microns of thickness
// •	Etch – removes 2 microns of thickness
// •	X-ray – increases the thickness of the crystal by 1 micron; this operation can only be done once!
// •	Transporting and washing – removes any imperfections smaller than 1 micron (round down the number); do this after every batch of operations that remove material
// At the beginning of your program, you will receive a number representing the desired final thickness and a series of numbers, representing the thickness of crystal ore in microns. Process each chunk and print to the console the order of operations and number of times they need to be repeated to bring them to the desired thickness.
// The input comes as a numeric array with a variable number of elements. The first number is the target thickness and all following numbers are the thickness of different chunks of quartz ore.
// The output is the order of operation and how many times they are repeated, every operation on a new line. See the examples for more information.


function radioCrystal(input){
    var target = Number(input[0]);
 
    function process(crystalThickness, action){
        switch(action) {
            case "cut":
                crystalThickness = crystalThickness >> 2;
                cutCount++;
                break;
            case "lap":
                crystalThickness *= 0.8;
                lapCount++;
                break;
            case "grind":
                crystalThickness -= 20;
                grindCount++;
                break;
            case "etch":
                crystalThickness -= 2;
                etchCount++;
                break;
            case "xRay":
                crystalThickness += 1;
                xrayCount++;
                return crystalThickness;
        }
 
        return transportingWashing(crystalThickness);
    }
 
    function transportingWashing(crystalThickness) {
        return Math.floor(crystalThickness);
    }
 
    for(let i = 1; i < input.length; i++){
        var current = input[i];
        var cutCount = 0, lapCount = 0, grindCount = 0, etchCount = 0, xrayCount = 0;
        var used = false;
 
        console.log(`Processing chunk ${current} microns`);
 
        while(current != target){
            while(current >> 2 >= target - 1){
                current = process(current,"cut");
            }
            while(current * 0.8 >= target - 1){
                current = process(current,"lap");
            }
            while(current - 20 >= target - 1){
                current = process(current,"grind");
            }
            while(current - 2 >= target - 1){
                current = process(current,"etch");
            }
            if(current + 1 == target){
                current = process(current,"xRay");
                used = true;
            }
        }
 
        if(cutCount > 0) {
            console.log(`Cut x${cutCount}`)
            console.log("Transporting and washing");
        }
 
        if(lapCount > 0) {
            console.log(`Lap x${lapCount}`)
            console.log("Transporting and washing");
        }
 
        if(grindCount > 0) {
            console.log(`Grind x${grindCount}`)
            console.log("Transporting and washing");
        }
 
        if(etchCount > 0) {
            console.log(`Etch x${etchCount}`)
            console.log("Transporting and washing");
        }
 
        if(used) {
            console.log(`X-ray x1`)
        }
 
        console.log(`Finished crystal ${target} microns`)
    }
}

// 10.	**DNA Helix
// Write a JS program that prints a DNA helix with length, specified by the user. The helix has a repeating structure, but the symbol in the chain follows the sequence ATCGTTAGGG. See the examples for more information.
// The input comes as a single number. It represents the length of the required helix.
// The output is the completed structure, printed on the console.

function dnaHelix(number) {
    number = Number(number);
    let str = 'ATCGTTAGGG';
    let counter = 0;
    for(let i=0; i<number; i++) {
        if(i%4 == 0) {
            console.log(`**${str[counter%10]}${str[counter % 10 + 1]}**`);
        } else if(i%4 == 1) {
            console.log(`*${str[counter%10]}--${str[counter % 10 + 1]}*`);
        } else if(i%4 == 2) {
            console.log(`${str[counter%10]}----${str[counter%10 + 1]}`);
        } else if(i%4 == 3) {
            console.log(`*${str[counter%10]}--${str[counter % 10 + 1]}*`);
        }

        counter += 2
    }
}
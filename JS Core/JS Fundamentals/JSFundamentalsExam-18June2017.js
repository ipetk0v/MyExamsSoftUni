// Problem 1 – The Pyramid of King Djoser
// Glory to Imhotep, Creator of all things material, Chancellor of the King of Egypt, Doctor, First in line after the King of
// Upper Egypt, Administrator of the Great Palace, Hereditary nobleman, High Priest of Heliopolis, Builder, Chief
// Carpenter, Chief Sculptor, and Maker of Vases in Chief. It is by King Djoser’s decree that on this day we shall commence
// the construction of a Great Pyramid for our King. Imhotep, son of Ptah, demands that you honour your King by
// calculating the building materials needed to finish His home for the Afterlife.
// Write a JS program that calculates how much resources will be required for the construction of a pyramid. It is made
// out of stone, marble, lapis lazuli and gold. Your program will receive an integer that will be the base width and length
// of the pyramid and an increment, that is the height of each step. The bulk is made out of stone, while the outer layer
// is made out of marble. Every fifth step’s outer layer is made out of lapis lazuli instead of marble. The final step is
// made out of gold.
// The pyramid is built with 1x1 blocks with height equal to the given increment. The first step of the pyramid has width
// and length equal to the given base and every next step is reduced by 2 blocks (1 from each side). The height of every
// step equals the given increment. See the drawing for an example. White steps are covered in marble, blue steps are
// covered in lapis lazuli (every fifth layer from the bottom), and yellow steps are made entirely out of gold (top-most
// step).
// Since the outer layer of each step is made of a decorative material, to calculate the required stone for one step, reduce
// the width and length by 2 blocks (one from each side), find it’s area and multiply it by the increment. The rest of the
// step is made out of lapis lazuli for every fifth step from the bottom and marble for all other steps. To find the amount
// needed, you may, for example, find its perimeter and reduce it by 4 (to compensate for the overlapping corners) and
// multiply the result by the increment. See the drawing for details (grey is stone, white is decoration).
// 5x5 step
// Stone required – 9 x increment
// Marble required – 16 x increment
// 7x7 step
// Stone required – 25 x increment
// Marble required – 24 x increment
// 8x8 step
// Stone required – 36 x increment
// Marble required – 28 x increment
// Note the top-most layer is made entirely out of gold, with height equal to the given increment. See the examples for
// complete calculations.
// © Software University Foundation (softuni.org). This work is licensed under the CC-BY-NC-SA license.

function thePyramidOfKingDjoser(base,increment){
    let stoneRequired = 0
    let marbleRequired = 0
    let lapisRequired = 0
    let goldRequired = 0
    let finalPyramidHeight = 0

    while (base > 2) {
        let currentSize = base * base
        finalPyramidHeight += 1
        let currentStone = (base - 2) * (base - 2)
        stoneRequired += currentStone * increment
        base -= 2
        if (finalPyramidHeight % 5 !== 0) {
            marbleRequired += (currentSize - currentStone) * increment
        } else {
            lapisRequired += (currentSize - currentStone) * increment
        }        
    }

    finalPyramidHeight += 1
    goldRequired += base * base * increment
    console.log(`Stone required: ${Math.ceil(stoneRequired)}`)
    console.log(`Marble required: ${Math.ceil(marbleRequired)}`)
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisRequired)}`)
    console.log(`Gold required: ${Math.ceil(goldRequired)}`)
    console.log(`Final pyramide height: ${Math.floor(finalPyramidHeight * increment)}`)
}

// Problem 2 – Jan’s Notation
// Jan is a brilliant mathematician. With brilliance though comes bizzarity, and Jan has invented his own mathematic
// notation – he writes the operator after his operands, so he can save space by not writing any parenthesis. He asked
// from you to create an automated calculator that works with his notation, so he can prove to the world it’s the better
// way to do math!
// Write a JS program that parses a series of instructions written in postfix notation and executes them (postfix means
// the operator is written after the operands). You will receive a series of instructions – if the instruction is a number,
// save it; otherwise, the instruction is an arithmetic operator (+-*/) and you must apply it to the most two most
// recently saved numbers. Discard these two numbers and in their place,save the result of the operation – this number
// is now eligible to be an operand in a subsequent operation. Keep going until all input instructions have been
// exhausted, or you encounter an error.
// In the end, if you’re left with a single saved number, this is the result of the calculation and you must print it. If there
// are more numbers saved, then the user supplied too many instructions and you must print "Error: too many
// operands!". If at any point during the calculation you don’t have two number saved, the user supplied too few
// instructions and you must print "Error: not enough operands!". See the examples for more details.
// Input
// You will receive an array with numbers and strings – the numbers will be operands and must be saved; the strings will
// be arithmetic operators that must be applied to the operands.
// Output
// Print on the console on a single line the final result of the calculation or an error message, as instructed above.
// Constraints
//  The numbers (operands) will be integers
//  The strings (operators) will always be one of +-*/
//  The result of each operation will be in range [-2
// 53…253
// -1] (MAX_SAFE_INTEGER will never be exceeded)

function jansNotation(input) {
    let operators = []
    let result = 0
    for (let symbol of input) {
        if (Number.isInteger(symbol)) {
            operators.push(symbol)
        } else {
            let secondOperators = operators.pop()
            let firstOperators = operators.pop()
            switch (symbol) {
                case "+":
                    operators.push(firstOperators + secondOperators)
                    break;
                case "-":
                    operators.push(firstOperators - secondOperators)
                    break;
                case "*":
                    operators.push(firstOperators * secondOperators)
                    break;
                case "/":
                    operators.push(firstOperators / secondOperators)
                    break;
            }
        }
    }

    if (operators.length > 1) {
        console.log("Error: too many operands! ")
    } else if (!Number.isInteger(operators[0])){
        console.log("Error: not enough operands!")
    } else {
        console.log(operators[0])
    }
}

// Problem 3 – XML Messenger
// XML may not see much use these days, but there is legacy software out there that needs maintenance. You are tasked by your boss to add an HTML parser to an old messaging app. The catch – it has to support all of its versions!
// Write a JavaScript program that parses messages from XML format to HTML for display on a web page. A message has a body (the text) and attributes, which contain metadata – who sent the message, and who it is targeted at. This is the general format:
// <message to="Alice" from="Bob">This is a test</message>
// A valid message will always be enclosed in an opening and closing <message> tags and will have no extra characters before the opening and after the closing tag. Inside the opening tag, there will be only valid attributes. If the message does not match this format or not all characters belong to an attribute, print "Invalid message format".
// The opening tag contains the attributes. An attribute is in the form key="value", where the key will only contain lowercase Latin letters and the value will contain Latin alphanumeric characters, spaces and dots. Both key and value must be at least one character long. Characters which do not belong to a valid attribute must not be accepted – such messages are invalid. If the message format is valid, but it doesn’t have both valid to and from attributes, print "Missing attributes".
// Messages come from different versions of the software, so they may have additional attributes, but we only care about the sender and recipient. The to and from attributes may appear in different order along with other attributes, which we ignore – the message is still valid.
// The body of the message may contain any character, including line breaks (\n control symbol) – there is no need to validate it. Every time you encounter a line break, you must print the following text in a new paragraph. See the examples for details.
// The following message are all valid:
// <message to="Bob" from="Alice" timestamp="1497254092">Hey man, what's up?</message>
// <message from="Ivan Ivanov" to="Grace">Not much, just chillin. How about you?</message>
// <message to="MasterBlaster" from="TheAnimal" timestamp="1497254114">Same old, same old\nLet's go out for a beer</message>
// <message version="2.0" to="Alice" from="Charlie">TGIF!</message>
// The sender of the message is highlighted in green, while the recipient is in blue. Note the order may be mixed and the additional attributes are just ignored (but are still in valid key-value format).
// The following messages are all invalid and an error message must be printed, as instructed above:
// Message	Reason
// <message from="Alice" timestamp="1497254112">This is a test</message>	missing to attribute
// <message to="Matilda" from="Charlie"><media type="image" src="slyfox.jpg"/></message><meta version="2.0"/>	extra characters after closing tag
// <message from="MasterBlaster" to="TheAnimal" color="#FF340B">FWD: Funny stuff</message>	invalid characters in attribute (don’t form a valid attribute)
// <message from="Hillary" to="Edward" secret:true>VGhpcyBpcyBhIHRlc3Q</message>	invalid characters in opening tag (don’t form a valid attribute)
// After you parse the message and extract the sender, recipient and message body, print the HTML-formatted result:
// <article>
//   <div>From: <span class="sender">Alice</span></div>
//   <div>To: <span class="recipient">Bob</span></div>
//   <div>
//     <p>Same old, same old</p>
//   </div>
// </article>
// Note that if there is a line break in the message body, you have to add an additional paragraph. Nested elements are indented by two spaces for each level. See the examples for more details.
// Input
// You will receive a single string as input – a message that needs to be validated.
// Output
// Print on the console the HTML-formatted result or an error message, depending on the validation.
// Constraints
// •	The message body will not contain XML brackets (<>), there is no need to validate it
// •	There may be any number of spaces before and after an attribute
// •	An attribute will not contain spaces before or after the equal sign

function xmlMessage(input){
    if (input.startsWith("<message") && input.endsWith("</message>")) {
        console.log(true)
    }
}

xmlMessage("<message to=\"Bob\" from=\"Alice\" timestamp=\"1497254092\">Hey man, what's up?</message>")
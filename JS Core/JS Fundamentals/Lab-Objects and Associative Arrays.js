// 1.	Towns to JSON
// You’re tasked to create and print a JSON from a text table. You will receive input as an array of strings, where each string represents a row of a table, with values on the row encompassed by pipes "|" and optionally spaces. The table will consist of exactly 3 columns “Town”, “Latitude” and “Longitude”. The latitude and longitude columns will always contain valid numbers. Check the examples to get a better understanding of your task.
// The input comes as an array of strings – the first string contains the table’s headings, each next string is a row from the table.
// The output should be printed on the console – for each entry row in the input print the object representing it.

function townToJSON(arr) {
    let result = []
    let keys = arr[0].split(/\s*\|\s*/)
        .filter(a => a !== '')
    for (let str of arr.slice(1)) {
        let obj = {}
        let [town,lat,long] = str.split(/\s*\|\s*/)
        .filter(a => a !== '')
        obj[keys[0]] = town
        obj[keys[1]] = Number(lat)
        obj[keys[2]] = Number(long)
        result.push(obj)
    }
    console.log(JSON.stringify(result))
}

// 2.	Score to HTML
// You are given a JSON string representing an array of objects, parse the JSON and create a table using the supplied objects. The table should have 2 columns "name" and "score", each object in the array will also have these keys.
// Any text elements must also be escaped in order to ensure no dangerous code can be passed.
// You can either write the HTML escape function yourself or use the one from the Strings and Regular Expressions Lab.
// The input comes as a single string argument – the array of objects as a JSON.
// The output should be printed on the console – a table with 2 columns - "name" and "score", containing the values from the objects as rows.

function scoreToHTML(input) {
    let html = "<table>\n"
    html += "  <tr><th>name</th><th>score</th></tr>\n"
    let arr = JSON.parse(input)
    for (let obj of arr) {
        html += `  <tr><td>${escapeChars(obj['name'] + '')}` + `</td><td>${escapeChars(obj['score'] + '')}</td></tr>\n`
    }
    html += "</table>"
    console.log(html)
}
function escapeChars(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/</g, '&gt;')
        .replace(/</g, '&quot;')
        .replace(/</g, '&#39;')
}

// 3.	From JSON to HTML Table
// You’re tasked with creating an HTML table of students and their scores. You will receive a single string representing an array of objects, the table’s headings should be equal to the objects’ keys, while each object’s values should be a new entry in the table. Any text values in an object should be escaped, in order to avoid introducing dangerous code into the HTML. 
// Object’s keys will always be the same. 
// The input comes as single string argument – the array of objects.
// The output should be printed on the console – for each entry row in the input print the object representing it.

function fromJsonToHtmlTable(strArr) {
    let arr = JSON.parse(strArr)
    let str = "<table>\n"
    str += "    <tr>"
    let keys = Object.keys(arr[0])
    for (let key of keys) {
        str += `<th>${key}</th>`
    }
    str += "</tr>\n"
    for (let obj of arr) {
        str += '    <tr>'
        for (let index = 0; index < arr.length; index++) {
            str += `<td>${escapeChars(obj[keys[index]] + '')}</td>`
        }
        str += '</tr>\n'
    }
    str += '</table>'
    console.log(str)
    function escapeChars(str) {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
    }
}

// 4.	Sum by Town
// You’re tasked with calculating the total sum of income for a number of Towns. You will receive an array of strings representing towns and their incomes, every even index will be a town and every odd index will be an income belonging to that town. Create an object that will hold all the towns as keys and their total income (the sum of their incomes) as values to those keys and print it as a JSON. 
// The input comes as an array of strings - each even index is the name of a town and each odd index is an income belonging to that town.
// The output should be printed on the console - JSON representation of the object containing all towns and their total incomes.

function sumByTown(arr) {
    let obj = {}
    for (let index = 0; index < arr.length; index += 2) {
            if (obj.hasOwnProperty(arr[index])) {
                obj[arr[index]] = obj[arr[index]] + Number(arr[index+1])
            } else {
                obj[arr[index]] = Number(arr[index + 1])
            }
    }
    console.log(JSON.stringify(obj))
}

function countWordsInAtext(input) {
    let result = {}
    let currentArr = input[0].split(/\W+/).filter(a => a !== '')
    for (let index = 0; index < currentArr.length; index++) {
        if (!result.hasOwnProperty(currentArr[index])) {
            result[currentArr[index]] = 1
        } else {
            result[currentArr[index]] += 1
        }
    }
    console.log(JSON.stringify(result))
}

// 6.	Count Words with Maps
// You are tasked to count the number of words in a text using a Map, any combination of letters, digits and _ (underscore) should be counted as a word. The words should be stored in a Map - the key being the word and the value being the amount of times the word is contained in the text. The matching should be case insensitive. Print the words in a sorted order.
// The input comes as an array of strings containing one entry - the text whose words should be counted. The text may consist of more than one sentence.
// The output should be printed on the console - print each word in the map in the format "'<word>' -> <count> times", each on a new line.

function countWordsWithMaps(input) {
    let myMap = new Map()
    for (let str of input) {
        let words = str.split(/[^0-9a-zA-Z_]+/)
            .filter(s => s.trim() !== '')
        for (let word of words) {
            word = word.toLowerCase()
            if (myMap.has(word)) {
                myMap.set(word, (myMap.get(word) + 1))
            } else {
                myMap.set(word, 1)
            }
        }
    }
    let arr = Array.from(myMap.keys()).sort((a,b) => a.localeCompare(b))
    for (let key of arr) {
        console.log("'" + key + "'" + ' -> ' + myMap.get(key) + ' times')
    }
}

countWordsWithMaps(["Far too slow, you\'re far too slow."])
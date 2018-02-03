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

// 7.	Populations in Towns
// You have been tasked to create a register for different towns and their population.
// The input comes as array of strings. Each element will contain data for a town and its population in the following format:
// “{townName} <-> {townPopulation}”
// If you receive the same town twice, you should add the given population to the current one.
// As output, you must print all the towns, and their population.

function populationInTowns(input){
    let dataTownsWithPopulation = new Map()
    for (let element of input) {
        let currentData = element.split(' <-> ').filter(a => a !== '')
        let townName = currentData[0]
        let population = Number(currentData[1])
        if (!dataTownsWithPopulation.has(townName)) {            
            dataTownsWithPopulation.set(townName, population)
        } else {
            dataTownsWithPopulation.set(townName, (dataTownsWithPopulation.get(townName) + population))
        }
    }

    for (let town of dataTownsWithPopulation) {
        console.log(`${town[0]} : ${town[1]}`)
    }
}

// 8.	City Markets
// You have been tasked to follow the sales of products in the different towns. For every town you need to keep track of all the products sold, and for every product, the amount of total income.
// The input comes as array of strings. Each element will represent data about a product and its sales. The format of input is:
// {town} -> {product} -> {amountOfSales} : {priceForOneUnit}
// The town and product are both strings. The amount of sales and price for one unit will be numbers. Store all towns, for every town, store its products, and for every product, its amount of total income. The total income is calculated with the following formula - amount of sales * price for one unit. If you receive as input a town you already have, you should just add the new product to it.
// As output you must print every town, its products and their total income in the following format:
// “Town – {townName}
//  $$${product1Name} : {productTotalIncome}
//  $$${product2Name} : {productTotalIncome}
//  ...”
// The order of output for each of those entries is – by order of entrance.

function cityMarkets(input){
    let cityMarketsData = new Map()
    for (let city of input) {
        let currentData = city.split(' -> ')
        let town = currentData[0]
        let product = currentData[1]
        let amountOfSales = Number(currentData[2].split(" : ")[0])
        let priceForOneUnit = Number(currentData[2].split(" : ")[1])
        let total = amountOfSales * priceForOneUnit

        if (!cityMarketsData.has(town)) {
            cityMarketsData.set(town, new Map())
            cityMarketsData.get(town).set(product, total)
        } else {
            cityMarketsData.get(town).set(product,total)
        }
    }

    for (let city of cityMarketsData) {
        console.log(`Town - ${city[0]}`)
        for (let products of city[1]) {
            console.log(`$$$${products[0]} : ${products[1]}`)
        }
    }
}

// 9.	Lowest Prices in Cities
// You will be given several towns, with products and their price. You need to find the lowest price for every product and the town it is sold at for that price.
// The input comes as array of strings. Each element will hold data about a town, product, and its price at that town. The town and product will be strings; the price will be a number. The input will come in the following format:
// {townName} | {productName} | {productPrice}
// If you receive the same town and product more than once, you should update the old value with the new one.
// As output you must print each product with its lowest price and the town at which the product is sold at that price. If two towns share the same lowest price, print the one that was entered first. 
// The output, for every product, should be in the following format:
// {productName} -> {productLowestPrice} ({townName})
// The order of output is – order of entrance. See the examples for more info.

function lowestPricesInCities(input) {
    let productsData = new Map()
    for (let productsAndCity of input) {
        let [town,product,price] = productsAndCity.split(" | ")        
        if (!productsData.has(product)) {
            productsData.set(product, new Map())
        }
        productsData.get(product).set(town,Number(price))
    }

        for (let [key,value] of productsData) {
            let lowest = ([...value].reduce(function(a,b){
                if (a[1] < b[1]) {
                    return a;
                } else if (a[1] > b[1]) {
                    return b;
                }
                return a;
            }))
            console.log(`${key} -> ${lowest[1]} (${lowest[0]})`)
        }    
}

// 10.	Extract Unique Words
// Write a JS function that extracts all UNIQUE words from a valid text, and stores them. Ensure that there are NO duplicates in the stored words. Once you find a word, there is no need for you to store it again if you meet it again in the text. You also need to make all characters from the words you’ve stored – lowercase.
// The input comes as array of strings. Each element will represent a sentence.
// The output is all of the unique words you’ve found, each with each, separated by a coma and a space, printed in the order in which you’ve found them. 

function extractUniqueWords(input){
    let result = new Set()
    for (let textLine of input) {
        let word = textLine.split(/[\s\.\,]/).filter(a => a !== '')
        for (let wordAdd of word) {
            result.add(wordAdd.toLowerCase())
        }
    }

    console.log([...result.values()].join(', '))
}
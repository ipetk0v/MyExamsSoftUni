// 1.	 Heroic Inventory
// In the era of heroes, every hero has his own items which make him unique. Create a function which creates a register for the heroes, with their names, level, and items, if they have such. The register should accept data in a specified format, and return it presented in a specified format. 
// The input comes as array of strings. Each element holds data for a hero, in the following format:
// “{heroName} / {heroLevel} / {item1}, {item2}, {item3}...” 
// You must store the data about every hero. The name is a string, the level is a number and the items are all strings.
// The output is a JSON representation of the data for all the heroes you’ve stored. The data must be an array of all the heroes. Check the examples for more info.

function heroicInventory(input) {
    let heroData = []
    for (let i = 0; i < input.length; i++) {
        let [name,level,items] = input[i].split(" / ")
        if (items !== undefined) {            
        let hero = {name: name, level: Number(level), items: items.split(", ")}
        heroData.push(hero)
        }
    }
    console.log(JSON.stringify(heroData))
}

// 2.	JSON’s Table
// JSON’s Table is a magical table which turns JSON data into an HTML table. You will be given JSON strings holding data about employees, including their name, position and salary. You need to parse that data into objects, and create an HTML table which holds the data for each employee on a different row, as columns. 
// The name and position of the employee are strings, the salary is a number.
// The input comes as array of strings. Each element is a JSON string which represents the data for a certain employee.
// The output is the HTML code of a table which holds the data exactly as explained above. Check the examples for more info.

function jsonsTable(input){
    let result = "<table>\n"
    input.forEach(element => {
        let currentData = JSON.parse(element)
        result += "   <tr>\n" + 
            `       <td>${currentData.name}</td>\n` +
            `       <td>${currentData.position}</td>\n` +      
            `       <td>${currentData.salary}</td>\n` +
            "   <tr>\n"
    });
    result += "</table>"
    console.log(result)
}

// 3.	Cappy Juice
// You will be given different juices, as strings. You will also receive quantity as a number. If you receive a juice, you already have, you must sum the current quantity of that juice, with the given one. When a juice reaches 1000 quantity, it produces a bottle. You must store all produced bottles and you must print them at the end.
// Note: 1000 quantity of juice is one bottle. If you happen to have more than 1000, you must make as much bottles as you can, and store what is left from the juice.
// Example: You have 2643 quantity of Orange Juice – this is 2 bottles of Orange Juice and 643 quantity left.
// The input comes as array of strings. Each element holds data about a juice and quantity in the following format:
// “{juiceName} => {juiceQuantity}”
// The output is the produced bottles. The bottles are to be printed in order of obtaining the bottles. Check the second example bellow - even though we receive the Kiwi juice first, we don’t form a bottle of Kiwi juice until the 4th line, at which point we have already create Pear and Watermelon juice bottles, thus the Kiwi bottles appear last in the output.

function cappyJuice(input) {
    let dataJuice = new Map()
    input.forEach(juice => {
        let [name,quantity] = juice.split(" => ")
        if (!dataJuice.has(name)) {
            dataJuice.set(name,Number(quantity))
        } else {
            dataJuice.set(name , (dataJuice.get(name) + Number(quantity)))
        }
    })
    for (let juice of dataJuice) {
        if ((juice[1] / 1000) > 0) {
            console.log(`${juice[0]} => ${Math.floor(juice[1] / 1000)}`)   
        }
    }
}

// 4.	Store Catalogue
// You have to create a sorted catalogue of store products. You will be given the products’ names and prices. You need to order them by alphabetical order. 
// The input comes as array of strings. Each element holds info about a product in the following format:
// “{productName} : {productPrice}”
// The product’s name will be a string, which will always start with a capital letter, and the price will be a number. You can safely assume there will be NO duplicate product input. The comparison for alphabetical order is case-insensitive.
// As output you must print all the products in a specified format. They must be ordered exactly as specified above. The products must be divided into groups, by the initial of their name. The group’s initial should be printed, and after that the products should be printed with 2 spaces before their names. For more info check the examples.

function storeCatalogue(input) {
    let data = new Map()
    input.forEach(element => {
        let [name,quantity] = element.split(" : ")
        if (!data.has(name)) {
            data.set(name,quantity)
        }
    })
    
    let result = new Map([...data.entries()].sort())
    let priviusChar = ''
    let currentChar = ''
    for (let word of result) {
        currentChar = word[0][0]
        if (currentChar != priviusChar) {
            console.log(currentChar)
            console.log(`  ${word[0]}: ${word[1]}`)
            priviusChar = word[0][0]
        } else {
            console.log(`  ${word[0]}: ${word[1]}`)
            priviusChar = word[0][0]
        }
    }
}

// 5.	Auto-Engineering Company
// You are tasked to create a register for a company that produces cars. You need to store how many cars have been produced from a specified model of a specified brand.
// The input comes as array of strings. Each element holds information in the following format:
// “{carBrand} | {carModel} | {producedCars}”
// The car brands and models are strings, the produced cars are numbers. If the car brand you’ve received already exists, just add the new car model to it with the produced cars as its value. If even the car model exists, just add the given value to the current one.
// As output you need to print – for every car brand, the car models, and number of cars produced from that model. The output format is:
// “{carBrand}
//   ###{carModel} -> {producedCars}
//   ###{carModel2} -> {producedCars}
//   ...”
// The order of printing is the order in which the brands and models first appear in the input. The first brand in the input should be the first printed and so on. For each brand, the first model received from that brand, should be the first printed and so on. 

function autoEngineeringCompany(input){
    let garage = new Map()
    input.forEach(car => {
        let [make,model,produced] = car.split(" | ")
        if (!garage.has(make)) {
            garage.set(make, new Map().set(model,Number(produced)))
        } else {
            if (!garage.get(make).has(model)) {
                garage.get(make).set(model,Number(produced))
            } else {
                garage.get(make).set(model, (garage.get(make).get(model) + Number(produced)))
            }
        }
    })

    for (let cars of garage) {
        console.log(cars[0])
        for (let car of cars[1]) {
            console.log(`###${car[0]} -> ${car[1]}`)
        }
    }
}

// 6.	System Components
// You will be given a register of systems with components and subcomponents. You need to build an ordered database of all the elements that have been given to you.
// The elements are registered in a very simple way. When you have processed all of the input data, you must print them in a specific order. For every System you must print its components in a specified order, and for every Component, you must print its Subcomponents in a specified order.
// The Systems you’ve stored must be ordered by amount of components, in descending order, as first criteria, and by alphabetical order as second criteria. The Components must be ordered by amount of Subcomponents, in descending order.
// The input comes as array of strings. Each element holds data about a system, a component in that system, and a subcomponent in that component. If the given system already exists, you should just add the new component to it. If even the component exists, you should just add the new subcomponent to it. The subcomponents will always be unique. The input format is:
// “{systemName} | {componentName} | {subcomponentName}” 
// All of the elements are strings, and can contain any ASCII character. The string comparison for the alphabetical order is case-insensitive.
// As output you need to print all of the elements, ordered exactly in the way specified above. The format is:
// “{systemName}
//  |||{componentName}
//  |||{component2Name}
//  ||||||{subcomponentName}
//  ||||||{subcomponent2Name}
//  {system2Name} 
//  ...”

function systemComponents(input) {
    let systems = new Map()
    input.forEach(row => {
        let[system, component, subcomponent] = row.split(" | ")
        if(!systems.has(system)) systems.set(system, {})
        if(!systems.get(system).hasOwnProperty(component)) systems.get(system)[component] = []
        systems.get(system)[component].push(subcomponent)
    })

    let systemSortedKeys = [...systems.keys()].sort(amountOfComponentsThenAlpabeticalSort)
    systemSortedKeys.forEach(systemName => {
        console.log(systemName)
        let system = systems.get(systemName)
        let componentSortedKeys = Object.keys(system).sort((a,b) => {
            return system[a].length < system[b].length
        })
        componentSortedKeys.forEach(component => {
            console.log(`|||${component}`)
            system[component].forEach(subcomponent => {
                console.log(`||||||${subcomponent}`)
            })
        })
    })

    function amountOfComponentsThenAlpabeticalSort(a, b) {
        if(Object.keys(systems.get(a)).length === Object.keys(systems.get(b)).length) {
            if(a > b) return 1
            if(a < b) return -1
        } else {
            return Object.keys(systems.get(a)).length < Object.keys(systems.get(b)).length
        } 
    }

}

// 7.	Usernames
// You are tasked to create a catalogue of usernames. The usernames will be strings that may contain any ASCII character. You need to order them by their length, in ascending order, as first criteria, and by alphabetical order as second criteria. 
// The input comes as array of strings. Each element represents a username. Sometimes the input may contain duplicate usernames. Make it so that there are NO duplicates in the output.
// The output is all of the usernames, ordered exactly as specified above – each printed on a new line.

function usernames(input) {    
    let sortedSet = new Set(input)

    let result = [...sortedSet].sort((a,b) => {
        if(a.length != b.length){
            return a.length - b.length
        } else {
            return a.localeCompare(b)
        }
    })

    for (let a of result) {
        console.log(a)
    }
}

// 8.	*Unique Sequences
// You are tasked with storing sequences of numbers. You will receive an unknown amount of arrays containing numbers from which you must store only the unique arrays (duplicate arrays should be discarded). An array is considered the same (NOT unique) if it contains the same numbers as another array, regardless of their order. 
// After storing all arrays, your program should print them back in ascending order based on their length, if two arrays have the same length they should be printed in order of being received from the input. Each individual array should be printed in descending order in the format "[a1, a2, a3,… an]". Check the examples bellow.
// The input comes as an array of strings where each entry is a JSON representing an array of numbers.
// The output should be printed on the console - each array printed on a new line in the format "[a1, a2, a3,… an]" , following the above mentioned ordering.

function uniqueSequences(input) {
    let set = []

    for (let i = 0; i < input.length; i++) {
        let sortedArr = JSON.parse(input[i]).map(Number).sort((a,b) => a < b)
        if(i === 0){
            set.push(JSON.stringify(sortedArr))
        }

        if(!set.includes(JSON.stringify(sortedArr))){
            set.push(JSON.stringify(sortedArr))
        }
    }

    while (set.length !== 0) {
        console.log(JSON.parse(set.pop()))
    }
}

    function test(keyword,input){
        let tokens = input.split(keyword).filter(a => a !== '')

        let northPattern = /north([0-9]{2})/gmi
        let easterPattern = /easter([0-9]{2})/gmi
        let north = northPattern.exec(tokens[0])[1]
        let split = tokens[0].split(/^[0-9]/)
        let easter = easterPattern.exec(tokens[2])[1]
        let message = tokens[1]
    }

    test("<>",
"o u%&lu43t&^ftgv><nortH4276hrv756dcc, jytbu64574655k <>ThE sanDwich is iN the refrIGErator<>yl i75evEAsTer23,lfwe 987324tlblu6b"        )
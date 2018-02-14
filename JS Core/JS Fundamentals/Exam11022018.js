function bitcoinMining(input) {
    let bitcoinPrice = 11949.16;
    let goldPrice = 67.51;
    let money = 0
    let dayOfFirstPurchasedBitcoin = 0
    let bitcoins = 0
    let currentDay = 0

    for (let gold of input) {
        currentDay++
        if(currentDay % 3 === 0){
            money += (Number(gold) - (Number(gold) * 0.30)) * goldPrice
        } else {
            money += Number(gold) * goldPrice
        }

        if(money >= bitcoinPrice){
            if(dayOfFirstPurchasedBitcoin === 0){
                dayOfFirstPurchasedBitcoin = currentDay
            }
            bitcoins += Math.floor(money / bitcoinPrice)
            money %= bitcoinPrice;
        }
    }

    console.log(`Bought bitcoins: ${bitcoins}`)
    if(dayOfFirstPurchasedBitcoin !== 0){
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstPurchasedBitcoin}`)
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`)
}

function airPollution(inputSofiaMap, tokens) {
    // add array
    let sofiaMap = []
    let row = 0
    for (let map of inputSofiaMap) {
            let currentValue = map.split(' ')
            sofiaMap[row] = []
            for (let col = 0; col < 5; col++) {
                sofiaMap[row][col] = Number(currentValue[col])
        }
        row++
    }

    // switch command
    for (let command of tokens) {
        let getCurrentCommands = command.split(' ')
        switch (getCurrentCommands[0]) {
            case "breeze":
                breeze(sofiaMap, Number(getCurrentCommands[1]))
                break;
            case "gale":
                gale(sofiaMap, Number(getCurrentCommands[1]))
                break;
            case "smog":
                smog(sofiaMap, Number(getCurrentCommands[1]))
                break;
            default:
                break;
        }
    }

    // print 
    let result = ""
    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            if(sofiaMap[row][col] >= 50){
                result += `[${row}-${col}], `
            }
        }
    }

    if(result !== ""){        
        console.log(`Polluted areas: ${result.slice(0 , result.length - 2)}`)
    } else {
        console.log("No polluted areas")
    }


    // breeze command
    function breeze(sofiaMap,row) {
        for (let col = 0; col < sofiaMap.length; col++) {
            sofiaMap[row][col] -= 15
            if(sofiaMap[row][col] < 0){
                sofiaMap[row][col] = 0
            }
        }
    }

    // gale command
    function gale(sofiaMap,col) {
        for (let row = 0; row < sofiaMap.length; row++) {
            sofiaMap[row][col] -= 20
            if(sofiaMap[row][col] < 0){
                sofiaMap[row][col] = 0
            }
        }
    }

    // smog command
    function smog(sofiaMap,smogValue) {
        for (let row = 0; row < 5; row++) {
            for (let col = 0; col < 5; col++) {
                sofiaMap[row][col] += smogValue
            }
        }
    }
}

function surveyParser(input) {
    
    let pattern = /<svg><cat><text>(?:.*(?:\[(.*)\]))<\/text><\/cat>\s*<cat>(?:<g>(.*)<\/g>)<\/cat><\/svg>/
    let splitPattern = /<val>([0-9]+)<\/val>([0-9]+)/g
    let matches = pattern.exec(input)
    if(matches !== null){
        if(matches !== null){
            let head = matches[1]
            let values = matches[2]
            let sum = 0
            let votes = 0;
            while (result = splitPattern.exec(values)) {
                sum += Number(result[1]) * Number(result[2])
                votes += Number(result[2])
            }
        
            console.log(`${head}: ${parseFloat((sum / votes).toFixed(2))}`)
        } else {
            console.log("Invalid format")
        }    
    } else {
        console.log("No survey found")
    }    
}

function gameOfEpicness(inputGeneral, inputFights) {
    let kingdoms = {}

    // add generals
    inputGeneral.forEach(generalData => {
        let kingdom = generalData['kingdom']
        let general = generalData['general']
        let army = generalData['army']
        let generalWithArmy = { general, army, wins : 0, loss : 0 }
        if(!kingdoms.hasOwnProperty(kingdom)){
            kingdoms[kingdom] = [generalWithArmy]
        } else {
            if(kingdoms[kingdom][0].general !== general){                
                kingdoms[kingdom].push(generalWithArmy)
            } else {
                kingdoms[kingdom][0].army = army
            }
        }
    });

    let winners = []
    let lossers = []
    inputFights.forEach(fights => {
        if(fights[0] !== fights[2]){
            let attacker = kingdoms[fights[0]].find(function(element) {
                return element.general === fights[1];
              }).army;
            let defender = kingdoms[fights[2]].find(function(element) {
                return element.general === fights[3];
              }).army;
    
            if(attacker > defender){
                attacker += attacker * 0.10
                defender -= defender * 0.10
                winners.push(fights[0])
                lossers.push(fights[2])
                kingdoms[fights[0]].find(function(element) {
                    return element.general === fights[1];
                  }).wins += 1
                kingdoms[fights[2]].find(function(element) {
                    return element.general === fights[3];
                  }).loss += 1
            } else if (defender > attacker) {
                winners.push(fights[2])
                lossers.push(fights[0])
                defender += defender * 0.10
                attacker -= attacker * 0.10         
                kingdoms[fights[0]].find(function(element) {
                    return element.general === fights[1];
                  }).loss += 1
                kingdoms[fights[2]].find(function(element) {
                    return element.general === fights[3];
                  }).wins += 1
            }
            kingdoms[fights[0]].find(function(element) {
                return element.general === fights[1];
              }).army = attacker
              kingdoms[fights[2]].find(function(element) {
                return element.general === fights[3];
              }).army = defender
        }        
    })

    let countsWinner = {};
    let countLooser = {}
    winners.forEach(function(x) { countsWinner[x] = (countsWinner[x] || 0)+1; });
    lossers.forEach(function(x) { countLooser[x] = (countLooser[x] || 0)+1; });
    let winner = ""
    let aaaaa = []
    if(winners[0] === winners[1]){
        winner = Object.keys(countsWinner)[0]
        aaaaa = kingdoms[winner].sort((a,b) => {
            return a.army < b.army
        })
    } else {
        loosers = Object.keys(countLooser)[0]
        aaaaa = kingdoms[loosers].sort((a,b) => {
            return a.army > b.army
        })
        for (let win of winners) {
            for (let los of loosers) {
                if(win === los){
                    winners.
                }
            }
        }
    }

    console.log(`Winner: ${winner}`)
    for (let winner of aaaaa) {
        console.log(`/\\general: ${winner.general}`)
        console.log(`---army: ${Math.round(winner.army)}`)
        console.log(`---wins: ${winner.wins}`)
        console.log(`---losses: ${winner.loss}`)
    }
}

gameOfEpicness([ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
{ kingdom: "Stonegate", general: "Ulric", army: 4900 },
{ kingdom: "Stonegate", general: "Doran", army: 70000 },
{ kingdom: "YorkenShire", general: "Quinn", army: 0 },
{ kingdom: "YorkenShire", general: "Quinn", army: 2000 } ],
[ ["YorkenShire", "Quinn", "Stonegate", "Doran"],
["Stonegate", "Ulric", "Maiden Way", "Merek"] ]
)
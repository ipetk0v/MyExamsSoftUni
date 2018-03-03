// Write a JS function that takes a deck of cards as a string array and prints them as a sequence of cards (space separated). Print "Invalid card: [card]" when an invalid card definition is passed as input. Use the solution from the previous task to generate the cards.
// Input / Output
// The function must take an array of strings as parameter. As output, print on the console the list of cards as strings, separated by space.
// Submit a function that contains the makeCard factory function and other logic.

function deckOfCards(arr){
    function makeCard(cardFace, cardSuit){
        const VALID_CARD = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
        const VALID_SUIT = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        }
        if(VALID_CARD.indexOf(cardFace) < 0 || !VALID_SUIT.hasOwnProperty(cardSuit)){
            throw new Error('Invalid input data')
        }
    
        return cardFace + VALID_SUIT[cardSuit]
    }

    for (let i = 0; i < arr.length; i++) {
        let suit = arr[i].substring(arr[i].length - 1)
        let card = arr[i].substring(0, arr[i].length - 1)        
        try {
            arr[i] = makeCard(card,suit)
        } catch (er) {
            console.log("Invalid card: " + arr[i])
            return
        }
    }
    console.log(arr.join(' '))
}

deckOfCards(['5S', '3D', 'QD', '1C']);
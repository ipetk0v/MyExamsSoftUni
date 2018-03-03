// Create a JS factory function that returns a Card object to hold a card’s face and suit, both set trough the constructor. Throw an error if the card is initialized with invalid face or suit or if an attempt is made to change the face or suit of an existing instance to an invalid value.
// •	Valid card faces are: 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
// •	Valid card suits are: S (♠), H (♥), D (♦), C (♣)
// Both face and suit are expected as an uppercase string. The class also needs to have a toString() method that prints the card’s face and suit as a string. Use the following UTF code literals to represent the suits:
// •	\u2660 – Spades (♠)
// •	\u2665 – Hearts (♥)
// •	\u2666 – Diamonds (♦)
// •	\u2663 – Clubs (♣)
// Input / Output
// The factory function must take two string parameters. The toString() method of the returned object must return a string.
// Submit the factory function.

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

console.log('' + makeCard('A', 'S'));
console.log('' + makeCard('10', 'H'));
// console.log('' + makeCard('1', 'C'));
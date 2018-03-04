// You need to write an IIFE that results in an object containing two properties Card which is a class and Suits which is an object that will hold the possible suits for the cards.
// The Suits object should have exactly these 4 properties:
// •	SPADES: ♠
// •	HEARTS: ♥
// •	DIAMONDS: ♦
// •	CLUBS: ♣
// Where the key is SPADES, HEARTS e.t.c. and the value is the actual symbol ♠, ♥ and so on.
// The Card class should allow for creating cards, each card has 2 properties face and suit. The valid faces are the following ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"] any other are considered invalid.
// The Card class should have setters and getters for the face and suit properties, when creating a card or setting a property validations should be performed, if an invalid face or a suit not in the Suits object is passed an Error should be thrown.

let result = (function(){
    const Suits = {
        CLUBS: "\u2663",
        DIAMONDS: "\u2666",
        HEARTS: "\u2665",
        SPADES: "\u2660"
    }

    const Faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]

    class Card{
        constructor(face,suits){
            this.face = face
            this.suits = suits
        }

        set face(f){
            if(!Faces.includes(f)){
                throw new TypeError(`Invaid card face: ${f}`)
            }
            this._face = f
        }
        get face(){
            return this._face
        }
        set suits(s){
            if(!Object.keys(Suits).map(k => k = Suits[k]).includes(s)){
                throw new TypeError(`Invaid card suits: ${s}`)
            }
            this._suits = s
        }
        get suits(){
            return this._suits
        }

        toString(){
            return this._face + this._suits
        }
    }

    return {Suits, Card }
}())

let Card = result.Card
let Suits = result.Suits

let c1 = new Card('2', Suits.SPADES)
console.log(c1.toString())

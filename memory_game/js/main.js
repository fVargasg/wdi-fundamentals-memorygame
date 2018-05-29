/*console.log("Up and running!");
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

console.log("User flipped " + cardOne);
console.log("User flipped " + cardThree);*/

var cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    }
];
var cardsInPlay = [];

/*var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardsInPlay[0]);
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardsInPlay[1]);*/
function checkForMatch() {

    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
    } else {
        alert("Sorry, try again.");
    }
}

function flipCard(cardId) {
    
    console.log("User flipped " + cards[cardId].rank);
    
    cardsInPlay.push(cards[cardId].rank);

    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);

    checkForMatch();
}
flipCard(0);
flipCard(2);


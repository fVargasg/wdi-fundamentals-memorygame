/*console.log("Up and running!");
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

console.log("User flipped " + cardOne);
console.log("User flipped " + cardThree);*/

var cards = ["queen","queen","king","king"];
var cardsInPlay = [];

/*var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardsInPlay[0]);
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardsInPlay[1]);*/
function checkForMatch() {

    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
    } else {
        console.log("Sorry, try again.");
    }
}

function flipCard(cardId) {
    
    console.log("User flipped " + cards[cardId]);
    
    cardsInPlay.push(cards[cardId]);

    checkForMatch();
}
flipCard(0);
flipCard(2);


console.log(`Let's play war!`);

// styling for 'Winner' console log
let fontSize = '24px';
let color = 'blue';
let bgColor = 'white';

// NOTE: collapse 'deckOfCards' to view code below it
const deckOfCards = [{
        card: 'Ace',
        suit: 'Hearts',
        value: 14
    },
    {
        card: 'Ace',
        suit: 'Clubs',
        value: 14
    },
    {
        card: 'Ace',
        suit: 'Spades',
        value: 14
    },
    {
        card: 'Ace',
        suit: 'Diamonds',
        value: 14
    },
    {
        card: 'Two',
        suit: 'Hearts',
        value: 2
    },
    {
        card: 'Two',
        suit: 'Clubs',
        value: 2
    },
    {
        card: 'Two',
        suit: 'Spades',
        value: 2
    },
    {
        card: 'Two',
        suit: 'Diamonds',
        value: 2
    },
    {
        card: 'Three',
        suit: 'Hearts',
        value: 3
    },
    {
        card: 'Three',
        suit: 'Clubs',
        value: 3
    },
    {
        card: 'Three',
        suit: 'Spades',
        value: 3
    },
    {
        card: 'Three',
        suit: 'Diamonds',
        value: 3
    },
    {
        card: 'Four',
        suit: 'Hearts',
        value: 4
    },
    {
        card: 'Four',
        suit: 'Clubs',
        value: 4
    },
    {
        card: 'Four',
        suit: 'Spades',
        value: 4
    },
    {
        card: 'Four',
        suit: 'Diamonds',
        value: 4
    },
    {
        card: 'Five',
        suit: 'Hearts',
        value: 5
    },
    {
        card: 'Five',
        suit: 'Clubs',
        value: 5
    },
    {
        card: 'Five',
        suit: 'Spades',
        value: 5
    },
    {
        card: 'Five',
        suit: 'Diamonds',
        value: 5
    },
    {
        card: 'Six',
        suit: 'Hearts',
        value: 6
    },
    {
        card: 'Six',
        suit: 'Clubs',
        value: 6
    },
    {
        card: 'Six',
        suit: 'Spades',
        value: 6
    },
    {
        card: 'Six',
        suit: 'Diamonds',
        value: 6
    },
    {
        card: 'Seven',
        suit: 'Hearts',
        value: 7
    },
    {
        card: 'Seven',
        suit: 'Clubs',
        value: 7
    },
    {
        card: 'Seven',
        suit: 'Spades',
        value: 7
    },
    {
        card: 'Seven',
        suit: 'Diamonds',
        value: 7
    },
    {
        card: 'Eight',
        suit: 'Hearts',
        value: 8
    },
    {
        card: 'Eight',
        suit: 'Clubs',
        value: 8
    },
    {
        card: 'Eight',
        suit: 'Spades',
        value: 8
    },
    {
        card: 'Eight',
        suit: 'Diamonds',
        value: 8
    },
    {
        card: 'Nine',
        suit: 'Hearts',
        value: 9
    },
    {
        card: 'Nine',
        suit: 'Clubs',
        value: 9
    },
    {
        card: 'Nine',
        suit: 'Spades',
        value: 9
    },
    {
        card: 'Nine',
        suit: 'Diamonds',
        value: 9
    },
    {
        card: 'Ten',
        suit: 'Hearts',
        value: 10
    },
    {
        card: 'Ten',
        suit: 'Clubs',
        value: 10
    },
    {
        card: 'Ten',
        suit: 'Spades',
        value: 10
    },
    {
        card: 'Ten',
        suit: 'Diamonds',
        value: 10
    },
    {
        card: 'Jack',
        suit: 'Hearts',
        value: 11
    },
    {
        card: 'Jack',
        suit: 'Clubs',
        value: 11
    },
    {
        card: 'Jack',
        suit: 'Spades',
        value: 11
    },
    {
        card: 'Jack',
        suit: 'Diamonds',
        value: 11
    },
    {
        card: 'Queen',
        suit: 'Hearts',
        value: 12
    },
    {
        card: 'Queen',
        suit: 'Clubs',
        value: 12
    },
    {
        card: 'Queen',
        suit: 'Spades',
        value: 12
    },
    {
        card: 'Queen',
        suit: 'Diamonds',
        value: 12
    },
    {
        card: 'King',
        suit: 'Hearts',
        value: 13
    },
    {
        card: 'King',
        suit: 'Clubs',
        value: 13
    },
    {
        card: 'King',
        suit: 'Spades',
        value: 13
    },
    {
        card: 'King',
        suit: 'Diamonds',
        value: 13
    },
]

// each player# variable represents each player's hands
let playerOne = [];
let playerTwo = [];


// 'pot' is the stack of cards from each player
// during every round
let pot = [];


// parent function for game
function gameOfWar(array) {

    // shuffled deck
    let shuffledDeck = shuffleDeck(array);

    // deals shuffled deck
    dealDeck(shuffledDeck);

    // initiates game
    playWar();
}



// 'shuffleDeck' (f) takes in deckOfCards and shuffles it
// notes: this formula (Fisher-Yates algorithm) was found in research!
// what I learned: the algorithm is a stronger method of randomizing 
// a set of values (compared to sorting)  because every value is 
// equally likely to be selected (like drawing from a hat). In this
// context, is essential swaps the position of two given cards in the deck
function shuffleDeck(array) {

    let shuffledDeck;

    for (let i = 0; i < array.length; i++) {

        // 'newIndex' represents the new location of the 'card'
        // within the array. The sequence below (after randomly selecting
        // the new value) swaps out the 'cards' between these two indexes
        const newIndex = Math.floor(Math.random() * (i + 1));

        const temporarySpot = array[i];
        array[i] = array[newIndex];
        array[newIndex] = temporarySpot;
    }


    // the deckOfCards (now shuffled), 
    // becomes 'shuffledDeck'
    shuffledDeck = array;

    return shuffledDeck;
}



// 'dealDeck' distributes the shuffled deck to player one 
// and player two, alternating each card from the top of the deck to the bottom
function dealDeck(array) {

    for (let i = array.length - 1; i >= 0; i--) {
        if (i % 2 === 0) {
            playerOne.push(array[i]);
        } else {
            playerTwo.push(array[i]);
        }
    }

}



// 'playWar' is where the game is played
// the function will continue to run until a winner is determined
// (one player has no cards remaining in their deck)
function playWar() {

    // evaluates if each player has 
    // cards remaining in their stack
    // if they do, game on!
    if (playerOne.length === 0) {

        // the winning player needs 
        // all cards being held in 'pot' 
        // to total 52 cards
        playerTwo = pot.concat(playerTwo);

        console.log(`%cPlayer two wins!`, `color: ${color}; background: ${bgColor}; font-size: ${fontSize}`);
        console.error('Player two cards:', playerTwo);
        console.log('Player one cards:', playerOne);

    } else if (playerTwo.length === 0) {

        playerOne = pot.concat(playerOne);

        console.log(`%cPlayer one wins!`, `color: ${color}; background: ${bgColor}; font-size: ${fontSize}`);
        console.log('Player one cards:', playerOne);
        console.error('Player two cards:', playerTwo);

    } else {
        flipOneCard();
    }

    return;
}



function flipOneCard() {

    // player#Card represents each player's top card in their deck
    let playerOneCard = playerOne[playerOne.length - 1];
    let playerTwoCard = playerTwo[playerTwo.length - 1];

    // removes the last value of each player array, which 
    // is the top of each deck
    playerOne.pop();
    playerTwo.pop();

    // since 'pot' represents all current cards being played in one round,
    // every card laid is added to the current stack of cards
    pot = [...pot, playerOneCard, playerTwoCard];

    if (playerOneCard.value > playerTwoCard.value) {

        console.log(`Player one wins the round! ${playerOneCard.card} of ${playerOneCard.suit} beats ${playerTwoCard.card} of ${playerTwoCard.suit}`);

        // merges pot array to the beginning of playerOne array,
        // which is the bottom of the deck
        playerOne = pot.concat(playerOne);

        // empty the pot for the next round
        pot = [];

        playWar();

    } else if (playerTwoCard.value > playerOneCard.value) {

        console.log(`Player two wins the round! ${playerTwoCard.card} of ${playerTwoCard.suit} beats ${playerOneCard.card} of ${playerOneCard.suit}`);

        playerTwo = pot.concat(playerTwo);

        pot = [];

        playWar();

    } else {

        console.log('There was a tie!');

        // flipFourMoreCards();
        addThreeMoreCards();
    }

    return;
}

function addThreeMoreCards() {

    // player#Cards represents the top four cards for each player's deck
    let playerOneCards = playerOne.slice(-3);
    let playerTwoCards = playerTwo.slice(-3);

    // removes the top four cards from each player's decks
    playerOne = playerOne.slice(0, -3);
    playerTwo = playerTwo.slice(0, -3);

    // since 'pot' represents all current cards being played in one round,
    // every card laid is added to the current stack of cards
    pot = pot.concat(playerOneCards, playerTwoCards);

    playWar();
}


// function flipFourMoreCards() {

//     // player#Cards represents the top four cards for each player's deck
//     let playerOneCards = playerOne.slice(-4);
//     let playerTwoCards = playerTwo.slice(-4);

//     // removes the top four cards from each player's decks
//     playerOne = playerOne.slice(0, -4);
//     playerTwo = playerTwo.slice(0, -4);

//     // since 'pot' represents all current cards being played in one round,
//     // every card laid is added to the current stack of cards
//     pot = pot.concat(playerOneCards, playerTwoCards);

//     let playerOneFlippedCard = playerOneCards[playerOneCards.length - 1];
//     let playerTwoFlippedCard = playerTwoCards[playerTwoCards.length - 1];


//     // if one player doesn't have enough cards to 
//     // flip in the tiebreaker, the game ends 
//     if (playerOne.length === 0) {

//         // the winning player needs 
//         // all cards being held in 'pot' 
//         // to total 52 cards
//         playerTwo = pot.concat(playerTwo);

//         console.log(`%cPlayer two wins!`, `color: ${color}; background: ${bgColor}; font-size: ${fontSize}`);
//         console.log('Player two cards:', playerTwo);
//         console.error('Player one cards:', playerOne);

//     } else if (playerTwo.length === 0) {

//         playerOne = pot.concat(playerOne);

//         console.log(`%cPlayer one wins!`, `color: ${color}; background: ${bgColor}; font-size: ${fontSize}`);
//         console.log('Player one cards:', playerOne);
//         console.error('Player two cards:', playerTwo);

//     } else {
        
//         if (playerOneFlippedCard.value > playerTwoFlippedCard.value) {

//             console.log(`Player one wins the tiebreaker! ${playerOneFlippedCard.card} of ${playerOneFlippedCard.suit} beats ${playerTwoFlippedCard.card} of ${playerOneFlippedCard.suit}`);

//             // merges pot array to the beginning of playerOne array,
//             // which is the bottom of the deck
//             playerOne = pot.concat(playerOne);

//             // empty the pot for the next round
//             pot = [];

//             playWar();

//         } else if (playerTwoFlippedCard.value > playerOneFlippedCard.value) {

//             console.log(`Player two wins the tiebreaker! ${playerTwoFlippedCard.card} of ${playerTwoFlippedCard.suit} beats ${playerOneFlippedCard.card} of ${playerOneFlippedCard.suit}`);

//             playerTwo = pot.concat(playerTwo);

//             pot = [];

//             playWar();

//         } else {

//             console.log('There was a tie!');

//             flipFourMoreCards();
//         }
//     }

//     return;
// }


// let's play WAR!
gameOfWar(deckOfCards);
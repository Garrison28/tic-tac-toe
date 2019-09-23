document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('reset').addEventListener('click', startGame)
    console.log("Success!")
});
//startBoard will be an array based on true and false values, starting out all false
var startBoard;
let player1 = [false, false, false, false, false, false, false, false, false];

let player2 = [false, false, false, false, false, false, false, false, false];
// players automatically start with a false value until clicked to change value to true showing that the square has been clicked
let playerSelections = [false, false, false, false, false, false, false, false, false];
// sets the current player
let currentPlayer = 0;
// all possible winning combinations
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [3, 4, 6]
];
// grabbing the id square from my html doc
const squares = document.querySelectorAll('.sqaure');
var counter;
var sqaureCount;
var winningMeassage;
var tieMessage;

// my start game function, creating the gameBoard as an array of 0-9
function startGame() {
    startBoard = Array.from(Array(9).keys());
    console.log(startBoard)
};

// calling my start game function
startGame();


document.getElementById("gameBoard").addEventListener('click', onClick);
// when you click a square on the board, it will place an X or O in the square
function onClick(e) {
    console.log(e.target);
    //
    // if (e.target === this) {
    //     return
    // }
    // If the current player is = 0, it will place an X in the square and change current player to 1
    if (currentPlayer == 0) {
        e.target.textContent = "X";
        player1[e.target.id] = true;
        // console.log(playerSelections);
        if (youHaveWon()) {
            stopGame();
        }
        // if (youHaveTied()) {
        //     stopGame();
        // };
        // this acts as a switch turn function, telling the computer that when the current player at 0 clicks a square, turning it to X,
        //it then checks the winGame function to see if that play has won, if they haven't then it changes the current play to 1
        currentPlayer = 1;
    }
    // now current player is set to 1 or the ai player and will place an O in the sqaure, will set current player to 0 after square is selected
    else {
        e.target.textContent = "O";
        player2[e.target.id] = true;
        // console.log(playerSelections);
        
        if (youHaveWon()) {
            stopGame();
        }
        // if (youHaveTied()) {
        //     stopGame();
        // };

        currentPlayer = 0;
    }
};




function youHaveWon() {
    // when current player is at 0, it is huPlayers turn
    if (currentPlayer == 0) {
        playerSelections = player1;
        console.log(playerSelections);
    }
    //otherwise, when current player is at 1, its the aiPlayer turn
    else {
        playerSelections = player2;
        console.log(playerSelections);
    }
    // this block of code checks for a win from the winningCombinations array and runs a for loop to check eveytime to see if a player has won
    for (var i = 0; i < winningCombinations.length; i++) {
        let winningSet = winningCombinations[i];
        counter = 0;
        for (var w = 0; w < winningSet.length; w++) {
            if (playerSelections[winningSet[w]] === true) {
                counter++
            }
            else {
                break;
            }
            if (counter >= 3) {
                return true;
            }
        }
        
    }
    return false;
};


// function youHaveTied() {

//     var sqaureCount = 0;
//     while(sqaureCount < 9) {
//         if(squares[sqaureCount].textContent === 'X' || squares[sqaureCount].textContent === 'O') {
//             sqaureCount++
//         } else {
//             return
//         }
//         if(sqaureCount === 9) {
//             console.log("Tie Game");
            
//         }
//     }
//     if (true) {
//         (document.getElementById("0").innerText !== '')
//         &&
//         (document.getElementById("1").innerText !== '')
//         &&
//         (document.getElementById("2").innerText !== '')
//         &&
//         (document.getElementById("3").innerText !== '')
//         &&
//         (document.getElementById("4").innerText !== '')
//         &&
//         (document.getElementById("5").innerText !== '')
//         &&
//         (document.getElementById("6").innerText !== '')
//         &&
//         (document.getElementById("7").innerText !== '')
//         &&
//         (document.getElementById("8").innerText !== '')
// };
    
    // document.getElementById("gameBoard").removeEventListener('click', onClick);
    // tieMessage = document.getElementById("tie-message").textContent = "You've Tied!"

// };


function stopGame() {
    document.getElementById("gameBoard").removeEventListener('click', onClick);
    if (currentPlayer === 0) {
        winningMeassage = document.getElementById("winning-message").textContent = "X Wins!";
    } else {
        winningMeassage = document.getElementById("winning-message").textContent = "O Wins";
    }
};
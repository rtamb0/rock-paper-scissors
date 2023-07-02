// A function called getComputerChoice that returns either "Rock", "Paper", or "Scissors" randomly for the CPU.
function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissors"]
    return choice[Math.floor(Math.random() * choice.length)];
}

// Variables to select/create elements
const script = document.querySelector('.script');
const body = document.querySelector('.body');
const result = document.createElement('p');
body.appendChild(result);
const roundEnd = document.createElement('p');
body.appendChild(roundEnd);

// Restart button that appears at the end of the game and restarts the game from the beginning
const restart = document.createElement('button');
restart.classList.add('restart');
restart.textContent = "Restart";
restart.addEventListener('click', (e) => {
    restartGame()
    choiceWrap.removeChild(restart);
    buttonChoice.forEach((button) => {
        choiceWrap.appendChild(button)
    });
});

function restartGame() {
    player = 0;
    computer = 0;
    roundEnd.textContent = "";
    result.textContent = "";
};

// Function that removes the choices at the end of the game
const choiceWrap = document.querySelector('.choice-container');
const buttonChoice = document.querySelectorAll('.choice')
function removeChoice() {
    buttonChoice.forEach((button) => {
    choiceWrap.removeChild(button);
    });
    choiceWrap.appendChild(restart);
};

// Event Listeners for the buttons to play the game
const rock = document.querySelector('#rock');
rock.addEventListener('click', (e) => {
    playRound("Rock");
});
const paper = document.querySelector('#paper');
paper.addEventListener('click', (e) => {
    playRound("Paper");
});
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', (e) => {
    playRound("Scissors");
});

// A function that plays a single round of the game. The function includes two parameters that indicate the player's and CPU's input. The function returns the result of the round in a string.
let player = 0;
let computer = 0;

function playRound(playerSelection, 
computerSelection = getComputerChoice()) {
    switch (playerSelection) {
        case computerSelection:
            result.textContent = "It's a tie!";
            break;
        case "Rock":
            if (computerSelection === "Scissors") {
                ++player;
                result.textContent = `Your Rock overpowers the CPU's Scissors!
                ${player} vs ${computer}`;
                break;
            } else {
                ++computer;
                result.textContent = `The CPU's Paper destroys your Rock... 
                ${player} vs ${computer}`;
                break;
            };
        case "Paper":
            if (computerSelection === "Rock") {
                ++player;
                result.textContent = `Your Paper overpowers the CPU's Rock!
                ${player} vs ${computer}`;
                break;
            } else {
                ++computer;
                result.textContent = `The CPU's Scissors destroys your Paper...
                ${player} vs ${computer}`;
                break;
            };
        case "Scissors":
            if (computerSelection === "Paper") {
                ++player;
                result.textContent = `Your Scissors overpowers the CPU's Paper!
                ${player} vs ${computer}`;
                break;
            } else {
                ++computer;
                result.textContent = `The CPU's Rock destroys your Scissors...
                ${player} vs ${computer}`;
                break;
            };
        default:
            result.textContent = "Invalid word. Please type the appropriate word.";
    };
    if (player === 5) {
        roundEnd.textContent = `You are the winner!`;
        removeChoice();
        } else if (computer === 5) {
        roundEnd.textContent = `Better luck next time...`;
        removeChoice();
    };
};     
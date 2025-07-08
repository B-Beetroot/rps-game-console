//Create a new function named getComputerChoice.
//return one of the following string values: “rock”, “paper” or “scissors”.
function getComputerChoice(){
    let randomChoice = Math.floor(Math.random()*100);
    if (randomChoice <33) {
        return "rock";
    } else if (randomChoice <66) {
        return "paper";
    } else {
        return "scissors";
    }   
}

//Create a new function named getHumanChoice.
//getHumanChoice will return one of the valid choices depending on what the user inputs. 
function getHumanChoice(){
    return prompt("Enter your choice");
}

//write variables to keep track of the players score.
//two new variables named humanScore and computerScore in the global scope. initialize 0.

//new function named playRound.
//two parameters for playRound: humanChoice and computerChoice
//function’s humanChoice parameter case-insensitive
//Increment the humanScore or computerScore variable based on the round winner.

// playRound function to console.log a string value representing the round winner.
//game will play 5 rounds. function named playGame that calls playRound to play 5 rounds
//Move your playRound function and score variables so that they’re declared inside of the new playGame function
function playGame (){

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

humanChoice = getHumanChoice()?.toLocaleLowerCase();
computerChoice = getComputerChoice();

console.log("Computer Choice = " + computerChoice);
console.log("Your Choice = " + humanChoice);

if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return "You win!";
    } else {
        computerScore++;
        return "Computer wins!";
    }

}


for (i=1; i<6 ; i++) {
console.log("Round " + i + " - " + playRound() + " - Your score: " + humanScore + " - Computer score: " + computerScore);
}
if (humanScore > computerScore){
console.log("Game Winner => You Win!" + " - Total score => You: " + humanScore + " - Computer: " + computerScore);
} else if (humanScore < computerScore) {
console.log("Game Winner => Computer Wins!" + " - Total score: => You: " + humanScore + " - Computer: " + computerScore);
} else {
    console.log("Game Winner => It's a tie!" + " - Total score: => You: " + humanScore + " - Computer: " + computerScore);
}

}


playGame();
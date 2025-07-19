
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

function playGame (){

let humanScore = 0;
let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

    const pChoice = document.querySelector("#pChoice");
    const cChoice = document.querySelector("#cChoice");

    pChoice.textContent = "Your Choice: " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
    cChoice.textContent = "Computer Choice: " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);  
    }   

    const infoHuman = document.querySelector("#infoHuman");
    const infoMain = document.querySelector("#infoMain");
    const infoComp = document.querySelector("#infoComp");
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            humanChoice = event.currentTarget.id;
            computerChoice = getComputerChoice();
            
            playRound(humanChoice, computerChoice);

                if (humanChoice === computerChoice) {
                    infoMain.textContent = "It's a Tie!";
                    } else if (
                        (humanChoice === "rock" && computerChoice === "scissors") ||
                        (humanChoice === "paper" && computerChoice === "rock") ||
                        (humanChoice === "scissors" && computerChoice === "paper")
                    ) {
                        ++humanScore;
                        infoMain.textContent = "You win!";
                        infoHuman.textContent = "Your score: " + humanScore;
                    } else {
                        ++computerScore;
                        infoMain.textContent = "Computer wins!";
                        infoComp.textContent = "Computer score: " + computerScore;
                    }
        
            if (computerScore === 5 || humanScore === 5) {
                infoMain.textContent = humanScore === 5 ? "Game Over: You Win!" : "Game Over: Computer Wins!";

                humanScore = 0;
                computerScore = 0;

                const restart = document.createElement("button");
                const restartImg = document.createElement("img");
                restartImg.src = "./images/restart.png";         
                restartImg.alt = "Restart";                     
                restartImg.title = "Restart";                    
                restartImg.style.width = "50%";               
                restartImg.style.height = "auto";                
                restart.appendChild(restartImg);

                const playButtons = document.querySelector("#playButtons");
                buttons.forEach(button => {
                    button.style.display = "none";
                });
                playButtons.appendChild(restart);
                restart.addEventListener("click", () => {
                buttons.forEach(button => {
                    button.style.display = "inline-block";
                });
                infoHuman.textContent = "Your Score: 0";
                infoComp.textContent = "Computer Score: 0";
                infoMain.textContent = "Make a Choice";
                pChoice.textContent = "";
                cChoice.textContent = "";
                restart.remove(); 
                });
                }
            });
        });
}

playGame();

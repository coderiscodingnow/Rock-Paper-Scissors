let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a draw.";
  }

  const playerWins =
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper");

  if (playerWins) {
    humanScore++;
    return `You win! ${playerChoice} beats ${computerChoice}.`;
  } 
  else {
    computerScore++;
    return `You lose. ${computerChoice} beats ${playerChoice}.`;
  }
}

function updateDisplay(resultMessage) {
  const resultDiv = document.getElementById("result");
  const scoreDiv = document.getElementById("score");

  resultDiv.textContent = resultMessage;
  scoreDiv.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) {
    const finalMsg = humanScore === 5 ? "You win the game!" : "Computer wins the game!";
    resultDiv.textContent = finalMsg;
    disableButtons();
  }
}


function disableButtons() {
  document.querySelectorAll("button[data-choice]").forEach(btn => {
    btn.disabled = true;
  });
}

document.querySelectorAll("button[data-choice]").forEach(button => {
  button.addEventListener("click", function () {
    const playerChoice = this.getAttribute("data-choice");
    const computerChoice = getComputerChoice();
    const result = playRound(playerChoice, computerChoice);
    updateDisplay(result);
  });
});



  function checkWinner() {
  if (humanScore > computerScore) {
    alert("You reached 5 points first. You win the game.");
  } 
  else {
    alert("The computer reached 5 points first. You lose the game.");
  }
}


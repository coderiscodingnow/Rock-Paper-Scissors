let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const n = Math.random() * 100 + 1;
  if (n < 34) return "rock";
  else if (n < 67) return "paper";
  else return "scissors";
}

function getHumanChoice() {
  const input = prompt("Enter rock, paper, or scissors:")
                  .trim()
                  .toLowerCase();
  if (["rock", "paper", "scissors"].includes(input)) {
    return input;
  } 
  else {
    alert("Invalid input. Please type rock, paper, or scissors.");
    return getHumanChoice();
  }
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

function playGame() {
  humanScore = 0;
  computerScore = 0;

  while (humanScore < 5 && computerScore < 5) {
    const player = getHumanChoice();
    const computer = getComputerChoice();

    alert(
      playRound(player, computer) +
      `\n\nScore:\nYou: ${humanScore}\nComputer: ${computerScore}`
    );
  }

  if (humanScore > computerScore) {
    alert("You reached 5 points first. You win the game.");
  } else {
    alert("The computer reached 5 points first. You lose the game.");
  }
}
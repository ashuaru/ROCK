function computerPlay() {
    let random = Math.random();
    if (random <= 0.3333) {
      return "paper";
    } else if (random >= 0.6666) {
      return "rock";
    } else {
      return "scissors";
    }
  }
  
  
  function playRound(userSelection, systemSelection) {
    if (userSelection.toLowerCase() === "rock") {
      if (systemSelection === "paper") {
        computerScore++;
        return lose;
      } else if (systemSelection === "rock") {
        return tie;
      } else {
        userScore++;
        return win;
      }
    }
  
    if (userSelection.toLowerCase() === "scissors") {
      if (systemSelection === "paper") {
        userScore++;
        return win;
      } else if (systemSelection === "rock") {
        computerScore++;
        return lose;
      } else {
        return tie;
      }
    }
  
    if (userSelection.toLowerCase() === "paper") {
      if (systemSelection === "paper") {
        return tie;
      } else if (systemSelection === "rock") {
        userScore++;
        return win;
      } else {
        computerScore++;
        return lose;
      }
    }
  }
  
  
  let userScore = parseInt(0);
  let computerScore = parseInt(0);
  let win = "You win"
  let lose = "You lose"
  let tie = "It is a tie"
  
  for(var i=0;i<5;i++){
    let userSelection = prompt("Pick a move");
    const systemSelection = computerPlay()
    console.log(playRound(userSelection, systemSelection))
    console.log("your score = " + userScore);
    console.log("Computer's score = " + computerScore);
  }
  

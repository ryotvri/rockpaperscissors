function getComputerChoice() {
    let num = Math.floor(Math.random()*3);
    let choice;
    if (num==1){
        choice="Rock";
    } else if (num==2) {
        choice="Scissors";
    } else {
        choice="Paper";
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection=="rock"&&computerSelection=="paper"||playerSelection=="scissors"&&computerSelection=="rock"||playerSelection=="paper"&&computerSelection=="scissors") {
        return "You lose!";
    } else if (playerSelection=="rock"&&computerSelection=="scissors"||playerSelection=="scissors"&&computerSelection=="paper"||playerSelection=="paper"&&computerSelection=="rock"){
        return "You win!";
    } else {
        return "Draw";
    }
  }

  function playGame() {
    let score = 0;
    let input, result, computerChoice;
    for (i=0;i<5;i++){
        input = prompt("What's your choice?").toLowerCase();
        computerChoice = getComputerChoice().toLowerCase();
        console.log(input + computerChoice);
        result = playRound(input,computerChoice);
        console.log(result);
        if (result=="You lose!"){
            score -=1;
        } else if (result=="You win!"){
            score +=1;
        } 
    }
    console.log("Final score: " + score);
    return score;
    
  }
  
  playGame();
  
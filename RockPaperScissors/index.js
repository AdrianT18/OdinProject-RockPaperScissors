function getComputerChoice() {
    const rps = ['Rock', 'Scissors','Paper'];
    return rps[Math.floor(Math.random() * rps.length)];
}

let player1 = 0;
let computer = 0;
let tie = 0;
let playerSelection
let computer1 = getComputerChoice()
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        tie++;
    }
    else if (playerSelection === 'Rock'){
        if (computerSelection === 'Scissors'){
            player1++;
        }
       else {
            computer++;
        }
    }
    else if (playerSelection === 'Scissors'){
        if (computerSelection === 'Paper'){
            player1++;
        }
        else {
            computer++;
        }
    }
    else if (playerSelection === 'Paper'){
        if (computerSelection === 'Rock'){
            player1++;
        }
        else {
            computer++;
        }
    }
}


function game(){
    for (let i = 0; i < 5; i++){
        playerSelection = window.prompt('Rock, Paper, Scissors?')
        playRound(playerSelection,computer1)
    }
    if (player1 === 5){
        alert('Player 1 wins')
    }
    else if (computer === 5){
        alert('Computer wins')
    }
    else if (player1 === computer) {
        alert('Its a draw')
    }
}
game()
function getComputerChoice(){
    const listofchoice = ["rock","paper","scissor"]
    // get random index value of the array
    const randomindex = Math.floor(Math.random() * listofchoice.length);
    choice = listofchoice[randomindex];
    return choice
}

function play(playerchoice,computerchoice){
    if (playerchoice === "rock"){
        if (computerchoice === "rock"){
            return result = "Draw game"
        } else if (computerchoice === "scissor"){
            playerpoint+=1;
            return result = "You won! Rock beats scissor"
        } else {
            computerpoint+=1;
            return result = "You lost! Paper beats rock"
        }
    }

    if (playerchoice === "scissor"){
        if (computerchoice === "rock"){
            computerpoint++;
            return result = "You lost! Rock beats scissor"
        }
        if (computerchoice === "scissor"){
            return result = "Draw game"
        }
        if (computerchoice === "paper"){
            playerpoint++;
            return result = "You won! Scissor beats paper"
        }
    }

    if (playerchoice === "paper"){
        if (computerchoice === "rock"){
            playerpoint++;
            return result = "You won! Paper beats rock"
        }
        if (computerchoice === "scissor"){
            computerpoint++;
            return result = "You lost! Scissor beats paper"
        }
        if (computerchoice === "paper"){
            return result = "Draw game"
        }
    }
    
}

let playerpoint = 0;
let computerpoint = 0;

// Single play mode

// let playerchoice = prompt("What's your choice").toLowerCase();
// let computerchoice = getComputerChoice();
// play(playerchoice,computerchoice);

// console.log("player choice is " + playerchoice);
// console.log("computer choice is " + computerchoice);
// console.log("Player now has " + playerpoint + " points");
// console.log("Computer now has " + computerpoint + " points");

// Multiple plays
let numberofgame = prompt("How many games you want to play?");

function game(x){
    for (let i = 0; i<x; i++){
        let playerchoice = prompt("What's your choice").toLowerCase();
        let computerchoice = getComputerChoice();
        play(playerchoice,computerchoice);
        console.log("player choice is " + playerchoice);
        console.log("computer choice is " + computerchoice);
        console.log("Player now has " + playerpoint + " points");
        console.log("Computer now has " + computerpoint + " points");
    }
}

game(numberofgame)
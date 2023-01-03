function getComputerChoice(){
    const listofchoice = ["rock","paper","scissor"]
    // get random index value of the array
    const randomindex = Math.floor(Math.random() * listofchoice.length);
    choice = listofchoice[randomindex];
    return choice
}

function play(playerchoice,computerchoice){
    console.log(playerchoice);
    console.log(computerchoice);
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

const rockchoice = document.querySelector('#rock');
rockchoice.addEventListener('click', function(e){
    let playerchoice= "rock";
    let computerchoice = getComputerChoice();

    // const player = document.querySelector('#playerchoice');
    // player.innerHTML = "<h1> Player choice this round is: " + playerchoice + "</h1>";
    const playerdisplay = document.querySelector('#playerchoice h1');
    playerdisplay.textContent = "Player choice this round is: " + playerchoice ;

    

    // const computer = document.querySelector('#computerchoice');
    // computer.innerHTML = "<h1> Computer choice this round is: " + computerchoice + "</h1>";
    const computerdisplay = document.querySelector('#computerchoice h1')
    computerdisplay.textContent = "Computer choice this round is: " + computerchoice ;
    

    // const result = document.querySelector('#result');
    // result.innerHTML = "<h1> Result this round is: " + play(playerchoice,computerchoice) + "</h1>";
    const resultdisplay = document.querySelector('#result h1');
    resultdisplay.textContent = "Result this round is: " + play(playerchoice,computerchoice);
   

    // const playerpts = document.querySelector('#playerpoint');
    // playerpts.innerHTML = "<h1> Player point is: " + playerpoint + "</h1>";
    const playerptsdisplay = document.querySelector('#playerpoint h1');
    playerptsdisplay.textContent = "Player point is: " + playerpoint;


    // const computerpts = document.querySelector('#computerpoint');
    // computerpts.innerHTML = "<h1> Computer point is: " + computerpoint + "</h1>";
    const computerptsdisplay = document.querySelector('#computerpoint h1');
    computerptsdisplay.textContent = "Computer point is: " + computerpoint;


    if (computerpoint == 5){
        alert("Computer won")
        location.reload();
    }

    if (playerpoint == 5){
        alert("Human won")
        location.reload();
    }
    console.log(playerpoint);
    console.log(computerpoint);
}); 

const paperchoice = document.querySelector('#paper');
paperchoice.addEventListener('click', function(e){
    let playerchoice= "paper";
    let computerchoice = getComputerChoice();

        // const player = document.querySelector('#playerchoice');
    // player.innerHTML = "<h1> Player choice this round is: " + playerchoice + "</h1>";
    const playerdisplay = document.querySelector('#playerchoice h1');
    playerdisplay.textContent = "Player choice this round is: " + playerchoice ;

    

    // const computer = document.querySelector('#computerchoice');
    // computer.innerHTML = "<h1> Computer choice this round is: " + computerchoice + "</h1>";
    const computerdisplay = document.querySelector('#computerchoice h1')
    computerdisplay.textContent = "Computer choice this round is: " + computerchoice ;
    

    // const result = document.querySelector('#result');
    // result.innerHTML = "<h1> Result this round is: " + play(playerchoice,computerchoice) + "</h1>";
    const resultdisplay = document.querySelector('#result h1');
    resultdisplay.textContent = "Result this round is: " + play(playerchoice,computerchoice);
   

    // const playerpts = document.querySelector('#playerpoint');
    // playerpts.innerHTML = "<h1> Player point is: " + playerpoint + "</h1>";
    const playerptsdisplay = document.querySelector('#playerpoint h1');
    playerptsdisplay.textContent = "Player point is: " + playerpoint;


    // const computerpts = document.querySelector('#computerpoint');
    // computerpts.innerHTML = "<h1> Computer point is: " + computerpoint + "</h1>";
    const computerptsdisplay = document.querySelector('#computerpoint h1');
    computerptsdisplay.textContent = "Computer point is: " + computerpoint;


    if (computerpoint == 5){
        alert("Computer won")
        location.reload();
    }

    if (playerpoint == 5){
        alert("Human won")
        location.reload();
    }
    console.log(playerpoint);
    console.log(computerpoint);
}); 

const scissorchoice = document.querySelector('#scissor');
scissorchoice.addEventListener('click', function(e){
    let playerchoice= "scissor";
    let computerchoice = getComputerChoice();

        // const player = document.querySelector('#playerchoice');
    // player.innerHTML = "<h1> Player choice this round is: " + playerchoice + "</h1>";
    const playerdisplay = document.querySelector('#playerchoice h1');
    playerdisplay.textContent = "Player choice this round is: " + playerchoice ;

    

    // const computer = document.querySelector('#computerchoice');
    // computer.innerHTML = "<h1> Computer choice this round is: " + computerchoice + "</h1>";
    const computerdisplay = document.querySelector('#computerchoice h1')
    computerdisplay.textContent = "Computer choice this round is: " + computerchoice ;
    

    // const result = document.querySelector('#result');
    // result.innerHTML = "<h1> Result this round is: " + play(playerchoice,computerchoice) + "</h1>";
    const resultdisplay = document.querySelector('#result h1');
    resultdisplay.textContent = "Result this round is: " + play(playerchoice,computerchoice);
   

    // const playerpts = document.querySelector('#playerpoint');
    // playerpts.innerHTML = "<h1> Player point is: " + playerpoint + "</h1>";
    const playerptsdisplay = document.querySelector('#playerpoint h1');
    playerptsdisplay.textContent = "Player point is: " + playerpoint;


    // const computerpts = document.querySelector('#computerpoint');
    // computerpts.innerHTML = "<h1> Computer point is: " + computerpoint + "</h1>";
    const computerptsdisplay = document.querySelector('#computerpoint h1');
    computerptsdisplay.textContent = "Computer point is: " + computerpoint;


    if (computerpoint == 5){
        alert("Computer won")
        location.reload();
    }

    if (playerpoint == 5){
        alert("Human won")
        location.reload();
    }
    console.log(playerpoint);
    console.log(computerpoint);
}); 






// Single play mode

// let playerchoice = prompt("What's your choice").toLowerCase();
// let computerchoice = getComputerChoice();
// console.log("player choice is " + rockchoice);
// console.log("computer choice is " + computerchoice);
// console.log("Player now has " + playerpoint + " points");
// console.log("Computer now has " + computerpoint + " points");

// Multiple plays
// let numberofgame = prompt("How many games you want to play?");

// function game(x){
//     for (let i = 0; i<x; i++){
//         let playerchoice = prompt("What's your choice").toLowerCase();
//         let computerchoice = getComputerChoice();
//         play(playerchoice,computerchoice);
//         console.log("player choice is " + playerchoice);
//         console.log("computer choice is " + computerchoice);
//         console.log("Player now has " + playerpoint + " points");
//         console.log("Computer now has " + computerpoint + " points");
//     }
// }

// // game(numberofgame)
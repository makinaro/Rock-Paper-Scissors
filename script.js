function computerPlay(){
    var choices = ["rock", "paper", "scissors"];
    var random = Math.floor(Math.random() * choices.length);
    return choices[random];
}
function play(choice){
    var playerSelection = choice.getAttribute("play-choice");
    var computerSelection = computerPlay();

    if(playerSelection == computerSelection){
        document.getElementById("score").innerHTML = "It's a tie!";
    }else if(playerSelection == "rock" && computerSelection == "paper"){
        document.getElementById("score").innerHTML = "You lose! Paper beats Rock";
    }else if(playerSelection == "rock" && computerSelection == "scissors"){
        document.getElementById("score").innerHTML = "You win! Rock beats Scissors";
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        document.getElementById("score").innerHTML = "You win! Paper beats Rock";
    }else if(playerSelection == "paper" && computerSelection == "scissors"){
        document.getElementById("score").innerHTML = "You lose! Scissors beats Paper";
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        document.getElementById("score").innerHTML = "You lose! Rock beats Scissors";
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
        document.getElementById("score").innerHTML = "You win! Scissors beats Paper";
    }
}
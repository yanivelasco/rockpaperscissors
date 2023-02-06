// start



const win = document.getElementById("win");
const lose = document.getElementById("lose");
const draw = document.getElementById("draw");

let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");

let rock_btn = document.querySelector(".rock");
let paper_btn = document.querySelector(".paper");
let scissors_btn = document.querySelector(".scissors");

let background = document.getElementById("gamefield");




//user choice, shake hands and change png all on click


rock_btn.onclick = function() {

    
    const choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerChoice);
    player2.classList.add(computerChoice);
    
    player1.classList.remove("paper");
    player1.classList.remove("scissors");
    player1.classList.remove("rock");

    // player2.classList.remove("paper");
    // player2.classList.remove("scissors");
    // player2.classList.remove("rock");

    player1.classList.add("shake");
    player2.classList.add("shake");
    player1.classList.add("rock");

    if ("rock" === computerChoice) {
        background.addEventListener("animationend", drawScreen);
      } else if (
        ("rock" === "rock" && computerChoice === "scissors") ||
        ("rock" === "paper" && computerChoice === "rock") ||
        ("rock" === "scissors" && computerChoice === "paper")
      ) {
        background.addEventListener("animationend", winScreen);
      } else {
        background.addEventListener("animationend", loseScreen);
      }

    

}

paper_btn.onclick = function() {

    
    const choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerChoice);
    player2.classList.add(computerChoice);

    player1.classList.remove("paper");
    player1.classList.remove("scissors");
    player1.classList.remove("rock");

    // player2.classList.remove("paper");
    // player2.classList.remove("scissors");
    // player2.classList.remove("rock");

    player1.classList.add("shake");
    player2.classList.add("shake");
    player1.classList.add("paper");

    if ("paper" === computerChoice) {
        background.addEventListener("animationend", drawScreen);
      } else if (
        ("paper" === "rock" && computerChoice === "scissors") ||
        ("paper" === "paper" && computerChoice === "rock") ||
        ("paper" === "scissors" && computerChoice === "paper")
      ) {
        background.addEventListener("animationend", winScreen);
      } else {
        background.addEventListener("animationend", loseScreen);
      }

}

scissors_btn.onclick = function() {


    const choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerChoice);
    player2.classList.add(computerChoice);

    player1.classList.remove("paper");
    player1.classList.remove("scissors");
    player1.classList.remove("rock");
    player1.classList.add("shake");


    player2.classList.add("shake");
    player1.classList.add("scissors");

    if ("scissors" === computerChoice) {
        background.addEventListener("animationend", drawScreen);
      } else if (
        ("scissors" === "rock" && computerChoice === "scissors") ||
        ("scissors" === "paper" && computerChoice === "rock") ||
        ("scissors" === "scissors" && computerChoice === "paper")
      ) {
        background.addEventListener("animationend", winScreen);
      } else {
        background.addEventListener("animationend", loseScreen);
      }


}

//computer choice

function change_choice () {
    const choices = ["rock", "paper", "scissors"];
    const pc_choices = choices[Math.floor(Math.random() * choices.length)];
    player2.classList.add(pc_choices);
    
    
}





//loop

function shake_end () {
    player1.classList.remove("shake");
    player2.classList.remove("shake");

}



player1.addEventListener("animationend", shake_end);
player2.addEventListener("animationend", shake_end);

function drawScreen() {
    draw.classList.remove("hidden");
    setTimeout(function () {
      window.location.reload();
    }, 1000);
  }


//result

function winScreen() {
    win.classList.remove("hidden");
    setTimeout(function () {
      window.location.reload();
    }, 1000);
  }
  
  function loseScreen() {
    lose.classList.remove("hidden");
    setTimeout(function () {
      window.location.reload();
    }, 1000);
  }
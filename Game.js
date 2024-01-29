let choices = document.querySelectorAll(".imgg");
let compChose = document.querySelector("#compChose");
let userChose = document.querySelector("#userChose");
let feedback = document.querySelector(".feedback");
let feedbackText = document.querySelector("#feedbackText");
let userScore  = document.querySelector("#userScore ");
let CompScore = document.querySelector("#CompScore");

let played = 0;
let user_score = 0;
let comp_score = 0;

const makeComputerMove = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    console.log ("computer chose", options[randIdx]);
    compChose.innerText = `${options[randIdx]}`;  
    return options[randIdx];
}



function gameLogic (userChoice,compChoice) {
    if (userChoice === compChoice) {
        drawn();
        
    }
    else if (userChoice === "scissors" && compChoice ==="paper") {
        userWins();
    }
    else if (userChoice === "scissors" && compChoice ==="rock") {
        compWins();
    }
    else if (userChoice === "paper" && compChoice ==="scissors") {
        compWins();
    }
    else if (userChoice === "paper" && compChoice ==="rock") {
        userWins();

    }
    else if (userChoice === "rock" && compChoice ==="scissors") {
        userWins();
    }
    else if (userChoice === "rock" && compChoice ==="paper") {
        compWins();
        
    }

if (feedbackText.innerText === "You Wins yeee" ) {
    return user_score++;
}
else if (feedbackText.innerText === "You lose nooo"){
    return comp_score++;
}
}

function userWins() {
    console.log("user wins");
    feedbackText.innerText = "You Wins yeee";
    feedback.style.backgroundColor ="green";
}
function compWins() {
    console.log("comp wins");
    feedbackText.innerText = "You lose nooo";
    feedback.style.backgroundColor ="red"; 

}
function drawn() {
    console.log("Game is Draw");
    feedbackText.innerText = "Game is Draw"; 
    feedback.style.backgroundColor = "blueviolet";
}

      

choices.forEach((val)=> {
    val.addEventListener("click", () => {
        const compChoice = makeComputerMove();
        let userChoice = val.getAttribute("id");
        console.log("user chose",userChoice);
        userChose.innerText = `${userChoice}`;           
        gameLogic(userChoice ,compChoice,played);
        played++;
        console.log("you played",played);
        userScore.innerText = `${user_score}`;
        CompScore.innerText = `${comp_score}`;
        console.log(user_score);
        console.log(comp_score);
    })
})


//DECLARATION

const userPossibleChoices = document.querySelectorAll("button");
const computerChoice = document.querySelector("#computer-choice");
const userChoice = document.querySelector("#user-choice");
const result = document.querySelector("#result");
let userFinalResult;
let compFinalResult;




//FUNCTION
const showComputerChoice = () =>{
    const randomNumber = Math.floor(Math.random() * 3) + 1;
   
    if (randomNumber === 1) {
        compFinalResult = "rock"
    } else if(randomNumber === 2){
     compFinalResult = "paper"
    }else{
        compFinalResult = "scissors";
    }
    console.log(compFinalResult);
    computerChoice.textContent = compFinalResult;

}

const showCompAndUserChoice = (e) =>{
    
    userFinalResult = e.target.className;
    userChoice.textContent = userFinalResult; 
    showComputerChoice();
    showResult();
}


const showResult = () => {
 if(compFinalResult === userFinalResult){
    result.textContent = "draw";
 }else if(compFinalResult === "rock" && userFinalResult === "paper"){
    result.textContent = "you win";
 }else if(compFinalResult === "rock" && userFinalResult === "scissors"){
    result.textContent = "you lose";
 }else if(compFinalResult === "scissors" && userFinalResult === "rock"){
     result.textContent = "you win";
 }else if(compFinalResult === "scissors" && userFinalResult === "paper"){
     result.textContent = "you lose";
 }else if(compFinalResult === "paper" && userFinalResult === "rock"){
     result.textContent = "you lose";
 }else if(compFinalResult === "paper" && userFinalResult === "scissors"){
     result.textContent === "you win";
 }

}



//EVENTLISTENERS
userPossibleChoices.forEach(userPossibleChoice => {
    userPossibleChoice.addEventListener("click", showCompAndUserChoice);
});

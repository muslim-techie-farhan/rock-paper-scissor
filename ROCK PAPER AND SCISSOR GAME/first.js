let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const userScorePara=document.querySelector("#user-score")
const compScorePara=document.querySelector("#comp-score")

const genCompChoice = ()=>{
    const options =["rock","paper","scissor"]
    const ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx];
}

const showWinner= (userWin,userChoice,compChoice)=>{
  if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
    msg.innerText = `YOU WIN :)  your ${userChoice} beats ${compChoice}`;  
    msg.style.backgroundColor="green";
  }
  else{
    compScore++;
    compScorePara.innerText=compScore;
    msg.innerText = `YOU LOSE :( ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor="red";
  }
}

const drawGame= ()=>{
    msg.innerText = "THE GAME WAS DRAW :|";
    msg.style.backgroundColor="yellow";
    msg.style.color="black"
}

const playGame = (userChoice)=>{

    const compChoice=genCompChoice();

    if(userChoice===compChoice){
        drawGame();
    }
    else{
      let userWin=true;
      if(userChoice==="rock"){
        userWin = compChoice==="paper"?false:true;
      }
      else if (userChoice==="paper"){
        userWin = compChoice==="scissor"?false:true;
      }
      else{
        userWin = compChoice==="rock"?false:true;
      }
      showWinner(userWin,userChoice,compChoice);
  }
} 

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });                                                                                      
});
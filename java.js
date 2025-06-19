let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


    const genCompChoice=() =>{
            const options=["rock","paper","scissors"];
            const randIdx=Math.floor(Math.random()*3);
            return options[randIdx];
    }
    const drawGame=()=>{
        console.log("Game was a draw");
        msg.innerText="Draw game";
        msg.style.backgroundColor="black";
    }
    const showWinner =(userWin,userChoice,compChoice)=>{
        if(userWin){
            userScore++;
            userScorePara.innerText=userScore;
            console.log("YOU WIN");
            msg.innerText=`YOU win! your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor="green";
        }
        else{
            console.log("You lose!");
            compScore++
            compScorePara.innerText=compScore;
            msg.innerText="YOU LOSE";
            msg.innerText=`YOU lose! your ${compChoice} beats ${userChoice}`;
            msg.style.backgroundColor="red";
        }
    };
    

const playGame=(userChoice) =>{
     console.log("user choice =",userChoice);
     const compChoice=genCompChoice();
     console.log("comp  choice=",compChoice);
     if(userChoice===compChoice){
        //draw game
        drawGame();
     }
     else {
        let userWin=true;
        if(userChoice=="rock"){
            //scissors,paper
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            //rock,scissors
            userWin=compChoice==="scissors"?false:true;
        }
        else
        {
            //scissors,rock
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);

        }
     };

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("choice was clicked",userChoice)
        playGame(userChoice);
    });
});
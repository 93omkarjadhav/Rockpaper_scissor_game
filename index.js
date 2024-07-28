let userscore=0;
let compscore=0;

const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const gencompchoice=() =>{
    const option=["rock", "paper","scissor"];
    const randomidx=Math.floor(Math.random()*3);
    return option[randomidx];
};

const drawgame=() =>{
    console.log("game drawn!");
    msg.innerText="Game drawn!Play again.";
    msg.style.backgroundColor="midnightblue";
};

const showWinner= (userwin)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText= userscore;
        console.log("You won!");
        msg.innerText="you Win!";
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        console.log("you lose");
        msg.innerText="You lose.";
        msg.style.backgroundColor="red"
    }
}


const playgame=(userchoice)=>{
    console.log("user choice = ",userchoice);
    //generate computer choice
    const compchoice=gencompchoice();
    console.log("comp choice = ",compchoice);

    if(userchoice==compchoice){
        //draw game
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            //scissor,paper
            userwin=compchoice==="paper"?false:true; 
        }
        else if(userchoice="paper"){
            //rock,scissor
            userwin=compchoice==="scissor"?false:true
        }
        else{
            //rock,paper
            userwin=compchoice==="rock"?false:true;
        }
        showWinner(userwin);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
       playgame(userchoice);

    });
});
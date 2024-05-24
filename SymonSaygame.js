let gameSeq = [];
let userSeq = [];
let btns =  ["yellow","red","purple","green"];
let satarted = false;
let level = 0;
let highscore = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(satarted==false){
        console.log("game start");
        satarted = true;
        levelUp();
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}
function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    //rendom btn choose
    let ranInd = Math.floor(Math.random()*3);
    let randColor = btns[ranInd];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);
}
function btnPress(){
    // console.log(this);
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userColor);
    checkAns(userSeq.length-1);
}

function checkAns(idx){
    // console.log("current level: ",level);
    if(userSeq[idx]==gameSeq[idx]){
        console.log("Same value");
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        let highsc = document.querySelector(".highscore");
        if(highscore<=level){
            highsc.innerText = `Highest score: ${level}`;
        }else{
            highsc.innerText = `Highest score: ${highscore}`;
        }
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },500);
        reset();
    }
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    satarted = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    
}

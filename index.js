let timer=1;
let score=0;
let random=0;

const bubbles=()=>{
let clutter="";

for ( let i=1; i<=102;i++) {
       let change=Math.floor(Math.random()*10)
       clutter += `<div class="circle">${change}</div>`      
}

document.getElementById("bbtm").innerHTML=clutter
}

const timerFunction=()=>{
   let timerSetinterval=setInterval(() => {
     if(timer>=0){
                   
                   document.querySelector("#timer").textContent=timer
                   timer--;       
     }
     else{
              clearInterval(timerSetinterval);
              document.getElementById("bbtm").innerHTML="<h1 id=go>GAME  OVER</h1>"
     }
   }, 1000);
}

const hit=()=>{
    random=Math.floor(Math.random()*10)
   document.getElementById("hitval").textContent=random;
}

const increaseScore=()=>{
      score +=10;        
      document.getElementById("scoreVal").textContent=score
}

const clickbubble=()=>{
     document.getElementById("bbtm").addEventListener("click",function(detl){
            let bubbleNumber=Number(detl.target.textContent);
            if(bubbleNumber===random){
              increaseScore();
              bubbles();
              hit();
            }
     })        
}

bubbles();
timerFunction();
hit();
clickbubble();
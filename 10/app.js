var heightMax=document.querySelector(".content").scrollHeight-30;
var widthMax=document.querySelector(".content").scrollWidth-30;
var box=document.querySelector(".box");
var content=document.querySelector('.content');
var misscount=1;
var scorecount=1;

content.addEventListener('click',bugEvent);

function bugEvent(event){
    
    var score=document.querySelector('.score');
    var miss=document.querySelector('.miss');
    if(event.target.classList.value==='box'){
        score.innerHTML=scorecount;
        scorecount++;
        clearInterval(set);
        move();
        set=setInterval(move,1000);
    }else{
        miss.innerHTML=misscount;
        misscount++;
        clearInterval(set);
        move();
        set=setInterval(move,1000);
        gameOver();
    }
    console.log(event.target.classList.value);
}

function move(){
    var left=Math.random()*widthMax;
    var top=Math.random()*heightMax;
    box.style.left=left+'px';
    box.style.top=top+'px';
}

function gameOver(){
    var over=document.querySelector('.gameover');
    if (misscount===11){
        clearInterval(set);
        content.removeEventListener('click',bugEvent);
        box.style.visibility='hidden';
        over.style.display='block';
    }
}

var set =setInterval(move,1000);





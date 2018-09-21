var wrap=document.querySelector(".wrap");
var str='';
for(var i=0;i<2;i++){
    for(var j=0;j<4;j++){
        if(j%2==0){
            str+='<div class="black"></div>';
        }
        if(j%2==1){
            str+='<div class="white"></div>';
        }
    }
    for(var j=0;j<4;j++){
        if(j%2==0){
            str+='<div class="white"></div>';
        }
        if(j%2==1){
            str+='<div class="black"></div>';
        }
    }
    
}

wrap.innerHTML=str;

var tmpColor;
var tmpDiv;

var divs = document.querySelectorAll('.wrap div');
function changBg(e){
    if(tmpDiv!=null){
        tmpDiv.style.backgroundColor=tmpColor;
    }
    tmpDiv=e.currentTarget;
    tmpColor=e.currentTarget.className;
    console.log(tmpColor);
    e.currentTarget.style.backgroundColor="yellow";
}

for(var i = 0; i < divs.length; i++){
  divs[i].addEventListener('click',changBg);
}
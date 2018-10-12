function gugudan(num){
        console.log(num+"단");
        for(var count1=1;count1<10;count1++){
           
            console.log(num+"x"+count1+"="+num*count1);
        }
    
}
for(var i=2; i<=9;i++){
    gugudan(i);
}
//prompt사용법익히기~!
var num,num2, total = 0;
var control=0;
control= prompt("몇개의 수를 더하고 싶나요?");
for(var i=0; i<parseInt(control);i++){
    num = prompt("숫자를 입력하세요");
    total=parseInt(total)+parseInt(num);
}

alert(total);

//퀴즈
function ExPrompt(){
    var num, total = 0;
    var isTrue=true;
    while(isTrue){
        num = prompt("숫자를 입력하세요");
        
        if(num === ""){
            alert( total );
            isTrue=false;
        }else{
            total+=parseInt(num);
        }
    }    
}
ExPrompt();


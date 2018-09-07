var str='helloworld!!!!!';
console.log(str);

var x= 'abc';//변수 선언
console.log(x);//콘솔로그 나오게 함
//변수에는 문자열, 숫자 등 여러개 넣어야함->자바에서는 자료형을 선언해야하는데 자바스크립트는 그럴 필요없음
//var를 사용권장, 예약어는 사용불가, 변수명은 대소문자를 구분함 구문은 세미콜론으로 각각구분 
//세미콜론은 없어도 되지만 규칙을 정하는 편이다. 한줄로 적는다면 무조건 세미콜론을 넣어야 함 

var conut=5;
//정수,실수를 구분하지않음, 따옴표를 사용하지않음

var nick="hi"
//쌍따옴표, 외따옴표를 구분하여 사용하지는 않지만 시작과 끝은 같아야함

var isMan=true;
//제어구조내에서 사용

var log=function(str)
{
    console.log(str);
}
function log(str){
    console.log(str);
};
//코드를 짜다보면 비슷한 코드를 만들게 될 수도 있는데 비슷한 코드끼리 잘묶어주는게 중요 -가독성, 재사용

console.log( 1 + 2 ) // 3
console.log( "a" + "b" ) // "ab"
console.log( 1 + "4") // "14"->오류처럼 인식될수있어서 같은 자료형끼리 하도록하는게 최선


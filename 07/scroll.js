var $window=$(window);
var $up=$('#up');

function checkScroll(){
    var scrollTop=$window.scrollTop();
    var 업버튼이_보여질_포지션=100;
    console.log(scrollTop);
    
    if(scrollTop>업버튼이_보여질_포지션){
        $up.fadeIn();
    }
    if(scrollTop===0){
        $up.fadeOut();
    }
}
function goTop(){
    $('html,body').animate({scrollTop:0},400);
}
$window.on("scroll",checkScroll);
$up.on('click',goTop);
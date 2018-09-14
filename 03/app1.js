function test(){
  console.log("test()");
}
// var id = setTimeout(test, 1000);
var id = setInterval(test, 1000);

var head = document.querySelector('head');
var script =document.createElement('script');
script.src='app2.js';
head.appendChild(sript);
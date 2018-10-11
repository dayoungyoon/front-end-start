console.log('1boon');

var count=1;
var number=600;
var url = 'https://1boon.kakao.com/ch/enter.json?page='+count+'&pagesize=8';
function makeUrl(count){
 url='https://1boon.kakao.com/ch/enter.json?page='+count+'&pagesize=8';
 return url;
}
getUrlData(url, print);

var image='';
function print(json){
  console.log(json);
  
  for(var i=0;i<json.data.length;i++){
    var imagepath=json.data[i].coverImage;
    var title = json.data[i].title;
    var path =json.data[i].path; 
    image+='<div class="box"><img class="img" src="'+imagepath+'" alt=""><a class="title" href="https://1boon.kakao.com/'+path+'">' + title + '</a></div>'
  }

  document.getElementById('dayoung').innerHTML=image;
  count+=1;
  console.log(url);
}

function getUrlData(url, callback) {
  fetch(url)
    .then(function(response) {
      response.json().then(function(data) {
        // console.log('json data:', data);
        callback(data)
      });
    })
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
}
var btn=document.querySelector('button');
function morePage(){
  
  
  count+=1;
  var url=makeUrl(count);
  getUrlData(url,print);
  number+=500;
  
  btn.style.top=number+'px';
}


btn.addEventListener("click",morePage);

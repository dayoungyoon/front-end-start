console.log('app')

var appkey = 'acf73f4615ca00f955cdc49ecd6d2687';
var query = '';
var url = '';
var size=1;
var str=""


var myHeaders = new Headers();
myHeaders.append("Authorization", "KakaoAK acf73f4615ca00f955cdc49ecd6d2687");
var options = {headers : myHeaders};
var btn=document.querySelector("button");
var dom=document.getElementById("btn");

dom.addEventListener('click',morePage);
btn.addEventListener('click',btnEvent);
  function btnEvent(){
    
    query=document.querySelector("input").value;
    getdata(query, options, print);
    dom.style.visibility='visible';
    
    
  }
  function getdata(query,options, print){
    url=`https://dapi.kakao.com/v2/search/web?query=${query}&page=${size}&size=20`;
   fetch(url, options)
   .then(function(response){
     response.json().then(function(data){
       console.log('json data:',data);
       console.log('url:',url);
       print(data);
      });
   })
  }  
  function morePage(){
    size+=1;
    getdata(query,options,print);
    
  }

  
    
  function print(json){
    document.querySelector(".wrapper").classList.remove('notSearched');
    console.log(json);
    var dom=document.getElementById("searchlist");
   
    for(var i=0;i<json.documents.length;i++){
      var title=json.documents[i].title;
      var url=json.documents[i].url;
      var contents=json.documents[i].contents;
      str+='<div class="contents"><div class="title"><a href='+url+'>'+title+'</a></div> <div class="content">'+contents+'</div></div>'
     ;
      
    }
    dom.innerHTML=str;
   

  }
  




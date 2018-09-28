console.log('1boon');

var url = 'https://1boon.kakao.com/ch/enter.json?page=1&pagesize=10';


getUrlData(url, print);

  
function print(json){
  console.log(json);
  var str = '';
  var image='';

  for(var i=0; i < json.data.length; i++){

    var title = json.data[i].title;
    var path =json.data[i].path; 
    str += '<a href="https://1boon.kakao.com/'+path+'">' + title + '</a><br>';
  }
  for(var i=0;i<json.data.length;i++){
    var imagepath=json.data[i].coverImage;
    image+='<img src="'+imagepath+'" alt="">'
  }

  document.getElementById('wrap').innerHTML = str;
  document.getElementById('dayoung').innerHTML=image;

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

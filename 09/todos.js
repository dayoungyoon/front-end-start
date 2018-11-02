//start...


var input =document.getElementById('memo');
var form =document.querySelector('.new-task');
var list=document.getElementById('list');
var html="";
var id=1;


function addTodo(event){
    // if(event.keyCode===13){
    //     var todo = input.value;
    //     console.log(todo);
    // }

    var todo=input.value;
    inserTode(todo);
    input.value='';
    event.preventDefault();
}

function inserTode(todo){
    html=`<li><button class="delete">×</button><input type="checkbox" class="toggle-checked"><span class="text">${todo}</span></li>`;
    list.innerHTML+=html;

}
function deleteTodo(event){
    console.log(event.target.classList.value);
    if(event.target.classList.value==='delete'){
        event.target.parentNode.remove();
    }
    
}

// input.addEventListener('click', addTodo);
form.addEventListener('submit', addTodo);
addEventListener('click',deleteTodo)

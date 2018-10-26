//start...


var input =document.getElementById('memo');
var form =document.querySelector('.new-task');
var list=document.getElementById('list');
var html="";


function addTodo(event){
    // if(event.keyCode===13){
    //     var todo = input.value;
    //     console.log(todo);
    // }

    var todo=input.value;
    inserTode(todo);
    console.log(todo);
    input.value='';
    event.preventDefault();
}

function inserTode(todo){
    html=`<li><button class="delete">×</button><input type="checkbox" class="toggle-checked"><span class="text">${todo}</span></li>`;
    list.innerHTML+=html;

}
function deleteTodo(event){
    console.log(event.target.classList.value);
    console.log(event);
    if(event.target.classList.value==='delete'){
        console.log(event.target.parentNode);
        event.target.parentNode.remove();
    }
    
}

// input.addEventListener('click', addTodo);
form.addEventListener('submit', addTodo);
console.log(list.innerHTML);
addEventListener('click',deleteTodo)

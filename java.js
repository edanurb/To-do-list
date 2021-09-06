var form = document.getElementById('form');
var taskList = document.querySelector('.taskList');


var items=[];


print_LS_Screen();
form.addEventListener('submit', addTask);
taskList.addEventListener('click', Delete)

function createLS(text){
    items.push(text);
    localStorage.setItem('items',JSON.stringify(items));
   
}

function print_LS_Screen(){
    
    if(JSON.parse(localStorage.getItem('items'))!=null){
    var item=JSON.parse(localStorage.getItem('items'));
    for(let i=0;i<item.length;i++)
    createitem(item[i]);
    }
}

function deleteJS(target){
    var items=[];
    items=JSON.parse(localStorage.getItem('items'));
    for(let i=0; i<items.length;i++){
        if(items[i]+'X'===target){
            localStorage.clear();
            items.splice(i,1);
            localStorage.setItem('items',JSON.stringify(items));
            break;
        }
    }



}

function createitem(text) {
    const button = document.createElement('button');
    const doTask = document.createElement('div');
    const span = document.createElement('span');
    doTask.className = 'border p-2 pl-3 d-flex justify-content-between';
    span.className = 'text-secondary';
    button.className = 'btn btn-sm mr-4';
    button.setAttribute('id', 'closeBtn');
    doTask.setAttribute('id', 'doTask');
    button.appendChild(document.createTextNode('X'));
    span.appendChild(document.createTextNode(text));
    doTask.appendChild(span);
    doTask.appendChild(button);
    document.querySelector('.taskList').appendChild(doTask);

    

}

function addTask(event) {
    event.preventDefault();
    let input;
    input = event.target.children[0];
 

    if (input.value == '') {
        alert('add task');
    }

    else {


        createitem(input.value);
        createLS(input.value);


    }

    input.value = '';

}


function Delete(event) {
    if (event.target.id === "closeBtn") {
        event.target.parentElement.remove();
        deleteJS(event.target.parentElement.textContent);
    }

    else if (event.target.id === "delete-btn") {
        var task = event.target.parentElement.parentElement;
        while (task.querySelector('#doTask') != null){
            task.querySelector('#doTask').remove();
            localStorage.clear();
        }
    }


}

//function Delete(event) {

var list = document.getElementById("list");

function addTodo(){
    var todo_item = document.getElementById("todo-app")

    // create li tag with text node    
    var li =document.createElement('li')
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)

    // delete button
    var delBtn =document.createElement("button")
    var delText = document.createTextNode("Delete")
    delBtn.setAttribute("class","btn")
    delBtn.setAttribute("onclick","deleteItem(this)") //this sara delete button lekar ajayega
    delBtn.appendChild(delText)



    // Edit button
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("Edit")
    editBtn.appendChild(editText)
    editBtn.setAttribute("class","btn1")
    editBtn.setAttribute("onclick","editItem(this)")


    li.appendChild(delBtn)
    li.appendChild(editBtn)
    list.appendChild(li)
    
    todo_item.value =" "
    
}


// For delete the individual li 
function deleteItem(e){

    e.parentNode.remove()
}

// for edit li
function editItem(e){
    
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter The Edit Value",val)
    e.parentNode.firstChild.nodeValue = editValue
}


//For delte all li
function deleteAll(){
    
    list.innerHTML = ""
}



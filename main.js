// gets the id from the add button 
const buttonAdd = document
    .getElementById("buttonAdd");

// gets the id from the refresh button 
const refresh = document
    .getElementById("refresh");

// gets the id from the ul tag 
const todoList = document
    .getElementById("todoList");

const checkedItemList = document
    .getElementById("checkedItemList");

// gets the id from the ul tag 
const doneTasks = document
	.getElementById("doneTasks");
	


//creates a function to the button so that you can submit the task
buttonAdd.addEventListener("click", function() {

    /*  gets the variable x that is the
     id of text input. The value will be the 
     text we put in the field */
    var todoText = document.getElementById("todoText").value;

    /* creates a li tag so
        you dont have to do it in html  */
    const todoTask = document
        .createElement("li");
    // creates a class for li so it can be styled to css
	todoTask.classList.add('todoTask');
	//create variable for li
	const ul = document
        .getElementsByTagName("ul");


    // delete button
    var deleteImage = document
        .createElement("img");
    // sets css attributes to the img
    deleteImage.setAttribute("src", "images/delete.png");
    deleteImage.classList.add("deleteImage");


    // checkbox
    var checkbox = document
        .createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");

    //gets the value from the field and adds it to the list
    todoTask.innerHTML = todoText;

    // if the field is empty you will be alerted
    if (todoText == '') {
        alert("Please write down a task!");
    }

    // else add a text if the field is not empty
    else {
        document.getElementById("todoList").appendChild(todoTask);
        todoTask.appendChild(deleteImage);
        todoTask.appendChild(checkbox);

        /* gets the latest li before the first child element of ul 
          which means the new task will end up first in the list*/
        todoList.insertBefore(todoTask, todoList.childNodes[0]);
        window.getComputedStyle(todoTask).opacity;
        todoTask.classList.add('fadeIn');
    }

    // delete function for the list
    deleteImage.addEventListener('click', function() {

 
		todoList.removeChild(todoTask);
	
    });

    // mark/check task function for the list
    checkbox.addEventListener('click', function() {

        if (this.checked) {
            todoTask.style.textDecoration = "line-through";

            // if the task is checked it will get moved down to another list
            document.getElementById("doneTasks").appendChild(todoTask);
			checkbox.style.display = "none";
		}
		// delete function for the list
		deleteImage.addEventListener('click', function() {

 			doneTasks.removeChild(todoTask);
		
		});
    });

});


// refresh function for the list
refresh.addEventListener('click', function() {
    const list = document.getElementsByTagName("li");

    for (var i = 0; i < list.length; i += 0) {
        list[i].remove();
    }

});
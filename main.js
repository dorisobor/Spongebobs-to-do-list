// gets the id from the add button 
const buttonAdd = document
  .getElementById("buttonAdd");

// gets the id from the refresh button 
const refresh = document
  .getElementById("refresh");

// gets the id from the ul tag 
const todoList = document
  .getElementById("todoList");


//creates a function to the button so that you can submit the task
buttonAdd.addEventListener("click", function () {

  /*  gets the variable x that is the
   id of text input. The value will be the 
   text we put in the field */
  var x = document.getElementById("todoText").value;

  /* creates a li tag so
      you dont have to do it in html  */
  const todoTask = document
    .createElement("li");
  // creates a class for li so it can be styled to css
  todoTask.classList.add('todoTask');

  // delete button
  const deleteImage = document
    .createElement("img");
  // sets css attributes to the img
  deleteImage.setAttribute("src", "images/delete.png");
  deleteImage.setAttribute("height", "25");
  deleteImage.setAttribute("width", "25");
  deleteImage.classList.add("deleteImage");

  // check button
  const checkImage = document
    .createElement("img");
  // sets css attributes to the img
  checkImage.setAttribute("src", "images/check.png");
  checkImage.setAttribute("height", "25");
  checkImage.setAttribute("width", "25");
  checkImage.classList.add("checkImage");


  //gets the value from the field and adds it to the list
  todoTask.innerHTML = x;
  document.getElementById("todoList").appendChild(todoTask);
  todoTask.appendChild(deleteImage);
  todoTask.appendChild(checkImage);

 /* gets the latest li before the first child element of ul 
   which means the new task will end up first in the list*/
  todoList.insertBefore(todoTask, todoList.childNodes[0]);


  
});
  

  // refresh function for the list
refresh.addEventListener('click', function () {
  const list = document.getElementsByTagName("li");

  for (var i = 0; i < list.length; i += 0) {
    list[i].remove();
  }

});




    



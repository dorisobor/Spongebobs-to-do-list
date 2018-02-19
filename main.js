// get the id from the button 
const button = document
  .getElementById("button");

// refresh list
const refresh = document
  .getElementById("refresh");



//creates a function to the button so that you can submit the task

button.addEventListener("click", function () {

  /* get gets the variable x that is the
   id of text input. The value will be the 
   text we put in the field */
  var x = document.getElementById("todoText").value;

  /* creates a paragraph tag so
      you dont have to do it in html  */
  const paragraph = document
    .createElement("p");

  // creates a class for paragraph so it can be styled to css
  paragraph.classList.add('todo-item');
  paragraph.innerHTML = x;
  document.getElementById('todos').appendChild(paragraph);
});


// refresh a todod
refresh.addEventListener('click', function () {
  var list = document.getElementsByTagName("p");

  for (var i = 0; i < list.length; i += 0) {
    list[i].remove();
  }


});


window.onload = function () {

  var list   = document.getElementById("list")
  var submit = document.getElementById("submit")
  var input  = document.getElementById("input")

  // possible to set up functions for adding list-item sub-divs upon 'add item'
  // submit, instead of calling entire functions & assignment within the click?

  // var addCheckBoxDiv = function() {
  //   checkboxDiv = document.createElement("div");
  //   checkboxDiv.className = "checkbox"
  //   checkboxDiv.innerHTML = "[ ]"
  // }
  //
  // var addItemNameDiv = function() {
  //   itemNameDiv = document.createElement("div");
  //   itemNameDiv.className = "item-name"
  //   itemNameDiv.innerHTML = input.value
  // }
  //
  // var addDeleteDiv = function() {
  //   deleteDiv   = document.createElement("div");
  //   deleteDiv.className = "delete"
  //   deleteDiv.innerHTML = "X"
  // }

  submit.addEventListener("click", function (event) {
    event.preventDefault();

    // create new element that is a list item
    var newItem = document.createElement('li');
    newItem.setAttribute('class','single-item')
    newItem.setAttribute('id','item')

    // add the divs that make up each list item
    // // add checkbox div to newItem
    var checkboxDiv = document.createElement("input");
    checkboxDiv.className = "checkbox"
    checkboxDiv.setAttribute('type','checkbox');
    newItem.appendChild(checkboxDiv);

    // // add item-name div where textContent (or innerHTML) = input.value
    var itemNameDiv = document.createElement("div");
    itemNameDiv.className = "item-name"
    itemNameDiv.innerHTML = input.value
    newItem.appendChild(itemNameDiv);

    // // add remove button
    var removeButton = document.createElement("button");
    removeButton.className = "btn delete"
    removeButton.innerHTML = "X"
    newItem.appendChild(removeButton);

    // add the event listeners to each div for interactivity
    // // checkbox marks <li> complete on click, as well as
    // // turn <li> grey and move it to the end of the list
    checkboxDiv.addEventListener("click", function () {
      this.parentNode.getElementsByClassName("item-name")[0].style.color="grey";
      newItem.parentNode.insertBefore(newItem,this.parentNode.lastChild.nextSibling);
    });

    // // add event listener to delete button to remove item on click
    // // // NEXT, refactor this to replace X with confirm-delete button;
    // // // confirm-delete button then does an event like this to remove whole <li>
    removeButton.addEventListener("click", function () {
      this.parentNode.parentNode.removeChild(this.parentNode);
    });

    // add entire new list item to end of list
    list.appendChild(newItem);

    // reset form values
    input.value = ""
  });














}

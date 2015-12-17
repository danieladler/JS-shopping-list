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
    var checkboxDiv = document.createElement("div");
    checkboxDiv.className = "checkbox"
    checkboxDiv.innerHTML = "[ ]"
    newItem.appendChild(checkboxDiv);

    // // add item-name div where textContent (or innerHTML) = input.value
    var itemNameDiv = document.createElement("div");
    itemNameDiv.className = "item-name"
    itemNameDiv.innerHTML = input.value
    newItem.appendChild(itemNameDiv);

    // // add delete button
    var deleteDiv = document.createElement("div");
    deleteDiv.className = "delete"
    deleteDiv.innerHTML = "X"
    newItem.appendChild(deleteDiv);

    // add the event listeners to each div for interactivity
    // // add event listener to checkbox to mark complete on click
    checkboxDiv.addEventListener("click", function () {
      // this. change to complete
    });

    // // add event listener to item-name to turn grey on click
    itemNameDiv.addEventListener("click", function () {
      this.style.color="grey"
    });

    // // add event listener to checkbox to mark complete on click
    // // // NEXT, refactor this to replace X with confirm-delete button;
    // // // confirm-delete button then does an event like this to remove whole <li>
    deleteDiv.addEventListener("click", function () {
      this.parentNode.parentNode.removeChild(this.parentNode);
    });

    // add entire new list item to end of list
    list.appendChild(newItem);

    // reset form values
    input.value = ""
  });














}

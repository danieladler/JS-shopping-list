window.onload = function () {

  var list   = document.getElementById("list")
  var submit = document.getElementById("submit")
  var input  = document.getElementById("input")

  submit.addEventListener("click", function (event) {
    event.preventDefault();

    // create new element that is a list item
    var newItem = document.createElement('li');
    newItem.setAttribute('class','single-item col-xs-10 col-xs-push-1')
    newItem.setAttribute('id','item')

    // add the divs that make up each list item
    // // add checkbox div to newItem
    var checkboxDiv = document.createElement("input");
    checkboxDiv.className = "checkbox col-xs-1"
    checkboxDiv.setAttribute('type','checkbox');
    newItem.appendChild(checkboxDiv);

    // // add item-name div where textContent (or innerHTML) = input.value
    var itemNameDiv = document.createElement("div");
    itemNameDiv.className = "item-name col-xs-9"
    itemNameDiv.innerHTML = input.value
    newItem.appendChild(itemNameDiv);

    // // add remove button
    var removeButton = document.createElement("button");
    removeButton.className = "col-xs-1 col-xs-push-1 btn btn-warning delete"
    removeButton.innerHTML = "X"
    newItem.appendChild(removeButton);

    // add the event listeners to each div for interactivity
    // // checkbox marks <li> complete on click, as well as
    // // turn <li> grey and move it to the end of the list
    checkboxDiv.addEventListener("click", function () {
      this.parentNode.getElementsByClassName("item-name")[0].style.color="rgb(180, 180, 180)";
      this.parentNode.getElementsByClassName("item-name")[0].style.textDecoration="line-through";
      this.parentNode.setAttribute("class","complete single-item col-xs-10 col-xs-push-1");
      newItem.parentNode.insertBefore(newItem,this.parentNode.lastChild.nextSibling);
    });

    // // add event listener to delete button to remove item on click
    // // // NEXT, refactor this to replace X with confirm-delete button;
    // // // confirm-delete button then does an event like this to remove whole <li>
    removeButton.addEventListener("click", function () {
      newItem.removeChild(this);
      var reallyRemove = document.createElement("button");
      reallyRemove.className = "col-xs-1 col-xs-push-1 btn btn-danger"
      reallyRemove.setAttribute("id","reallyRemove")
      reallyRemove.innerHTML = "X !"
      newItem.appendChild(reallyRemove);
      reallyRemove.addEventListener("click", function() {
        this.parentNode.parentNode.removeChild(this.parentNode);
      });
    });

    // add entire new list item to end of list
    list.appendChild(newItem);

    // reset form values
    input.value = ""
    input.focus();
  });

  // variables and events to change all items on list

  // mark all items complete
  var allComplete = document.getElementById("allComplete");
  allComplete.addEventListener("click", function () {
    var wholeList = document.getElementsByTagName("li");
    var i;
    for (i = 0; i < wholeList.length; i++) {
      wholeList[i].getElementsByClassName("item-name")[0].style.color="rgb(180, 180, 180)";
      wholeList[i].getElementsByClassName("item-name")[0].style.textDecoration="line-through";
      wholeList[i].setAttribute("class","complete single-item col-xs-10 col-xs-push-1");
    }
  });

  // remove all completed items
  var clear = document.getElementById("clear");
  clear.addEventListener("click", function () {
    var completed = document.getElementsByClassName("complete single-item col-xs-10 col-xs-push-1");
    while (completed.length > 0) {
      completed[0].parentNode.removeChild(completed[0]);
    }
  });

}

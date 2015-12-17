window.onload = function () {

  var list   = document.getElementById("list")
  var submit = document.getElementById("submit")
  var input  = document.getElementById("input")

  submit.addEventListener("click", function (event) {
    event.preventDefault();

    // create new element that is a list item
    var newItem = document.createElement('li');
    newItem.textContent = input.value
    newItem.setAttribute('class','single-item')
    console.log(newItem.innerHTML);

    // add 'input' to 'list' input.value
    list.appendChild(newItem);

    // reset form values
    input.value = ""
  });














}

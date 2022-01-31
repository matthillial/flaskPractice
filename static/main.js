function action() {
    console.log("CLICKED!");
    let li = document.createElement("li");
    li.innerText = input.value;
    guestList.appendChild(li);
  }
  
  var button = document.getElementById("button");
  var input = document.getElementById("nameInput");
  var guestList = document.getElementById("guestList");
  button.addEventListener("click", action);
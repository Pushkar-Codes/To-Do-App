let inputBox = document.getElementById("inputBox");
let addButton = document.getElementById("addButton");
let container = document.getElementById("container");

addButton.addEventListener("click", function () {
  if (inputBox.value == "") {
    alert("Please add task");
  } else {
    var taskDisplay = document.createElement("p");
    taskDisplay.classList.add("taskDsiaply-styling");
    taskDisplay.innerText = inputBox.value;
    container.appendChild(taskDisplay);

    inputBox.value = "";

    taskDisplay.addEventListener("click", function () {
      taskDisplay.style.textDecoration = "line-through";
    });

    taskDisplay.addEventListener("dblclick", function () {
      container.removeChild(taskDisplay);
    });
  }
});

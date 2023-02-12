const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", function() {
  const taskValue = taskInput.value;

  const taskItem = document.createElement("li");
  taskItem.innerHTML = taskValue;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.style.float = "right";

  deleteBtn.addEventListener("click", function() {
    taskList.removeChild(taskItem);
  });

  taskItem.appendChild(deleteBtn);
  taskList.appendChild(taskItem);

  taskInput.value = "";
});

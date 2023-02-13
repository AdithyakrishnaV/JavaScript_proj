const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);

// Load tasks from local storage when the page loads
window.addEventListener("load", loadTasks);

function addTask(e) {
e.preventDefault();
const task = taskInput.value;
if (task === "") return;
const li = document.createElement("li");
li.innerText = task;
taskList.appendChild(li);
saveTask(task);
taskInput.value = "";
}
function saveTask(task) {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
    tasks = [];
    } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    
    function loadTasks() {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
    tasks = [];
    } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.forEach(function(task) {
    const li = document.createElement("li");
    li.innerText = task;
    taskList.appendChild(li);
    });
    }
    
    
    
    
    
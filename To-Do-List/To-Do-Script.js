let todoList = document.getElementById('todo-list');
let taskInput = document.getElementById('task-input');
let addTaskBtn = document.getElementById('add-task-btn');

let tasks = [];

addTaskBtn.addEventListener('click', addTask);

function addTask() {
  let task = taskInput.value.trim();
  if (task) {
    let taskId = generateRandomId();
    tasks.push({ id: taskId, text: task });
    taskInput.value = '';
    renderTasks();
  }
}

function renderTasks() {
  todoList.innerHTML = '';
  tasks.forEach((task) => {
    let listItem = document.createElement('li');
    let taskText = document.createElement('span');
    taskText.textContent = task.text;
    listItem.appendChild(taskText);

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.setAttribute('onclick', `removeTask('${task.id}')`);
    listItem.appendChild(deleteButton);

    todoList.appendChild(listItem);
  });
}

function generateRandomId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

function removeTask(taskId) {
  tasks = tasks.filter(task => task.id !== taskId);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
}

renderTasks();
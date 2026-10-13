
let todoList = [
  { id: 1, text: "Buy groceries", completed: false },
  { id: 2, text: "Finish JavaScript project", completed: true },
  { id: 3, text: "Walk the dog", completed: false }
];

const todoListUl = document.getElementById("task-list");
const addTaskBtn = document.getElementById("add-task-btn");
const CreateTodoForm = document.querySelector(".todo-form");

let nextTodoId = Math.max(0, ...todoList.map(todo => todo.id)) + 1;


// Create a todo item
function createTodoLi(todoItem) {
  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "todo-box";
  checkbox.checked = todoItem.completed;

  const todoText = document.createElement("span");
  todoText.className = "todo-text";
  todoText.textContent = todoItem.text;

  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "Delete";

  // Update the task's appearance
  function updateTodoStyle() {
    todoText.style.textDecoration =
      todoItem.completed ? "line-through" : "none";

    todoText.style.color =
      todoItem.completed ? "gray" : "black";
  }

  updateTodoStyle();

  // Checkbox event
  checkbox.addEventListener("change", () => {
    todoItem.completed = checkbox.checked;
    updateTodoStyle();

    console.log(todoList);
  });

  // Delete event
  deleteBtn.addEventListener("click", () => {
    deleteTodoItem(todoItem.id, li);
  });

  li.append(checkbox, todoText, deleteBtn);

  return li;
}


// Display all tasks
function showTodoList() {
  todoListUl.innerHTML = "";

  todoList.forEach(todoItem => {
    todoListUl.appendChild(createTodoLi(todoItem));
  });
}

showTodoList();


// Add a new task
CreateTodoForm.addEventListener("submit", event => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());
  const newTodoText = data["todo-input"].trim();

  if (!newTodoText) {
    return;
  }

  const newTodoItem = {
    id: nextTodoId++,
    text: newTodoText,
    completed: false
  };

  todoList.push(newTodoItem);

  todoListUl.appendChild(createTodoLi(newTodoItem));

  event.target.reset();
});


// Show or hide the form
addTaskBtn.addEventListener("click", () => {
  if (CreateTodoForm.style.display === "flex") {
    CreateTodoForm.style.display = "none";
    addTaskBtn.textContent = "Add Todo";
  } else {
    CreateTodoForm.style.display = "flex";
    addTaskBtn.textContent = "Cancel";
    document.getElementById("todo-input").focus();
  }
});


// Delete a task
function deleteTodoItem(id, li) {
  todoList = todoList.filter(todoItem => todoItem.id !== id);

  li.remove();

  console.log(todoList);
}

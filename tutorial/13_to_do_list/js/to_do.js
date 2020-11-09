const form = document.querySelector("form");
const input = form.querySelector("input");
const ul = document.querySelector(".to_do_list");

let todos = [];

// localStorage.setItem("Key", "Value")
// localStorage.getItem('key')

function saveTodo() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function removeTodo(e) {
  const li = e.target.parentNode;
  li.remove();

  const newTodos = todos.filter((todo) => todo.id !== parseInt(li.id));
  todos = newTodos;
  saveTodo();
}

function paintTodo(text) {
  const li = document.createElement("li");
  const span = document.createElement("span");

  span.addEventListener("click", removeTodo);

  li.innerText = text;
  li.id = todos.length + 1;

  span.innerText = "x";

  li.appendChild(span);
  ul.appendChild(li);

  todos.push({
    id: todos.length + 1,
    text: text,
  });

  saveTodo();
}

function handleSubmit(e) {
  e.preventDefault();
  if (input.value === "") return;

  paintTodo(input.value);
  input.value = "";
}

function loadTodo() {
  // console.log(localStorage.getItem("todos"));
  const loadTodo = localStorage.getItem("todos");

  if (loadTodo !== null) {
    const parseTodo = JSON.parse(loadTodo);
    parseTodo.forEach((todo) => paintTodo(todo.text));
  }
}

function init() {
  loadTodo();
  form.addEventListener("submit", handleSubmit);
}

init();

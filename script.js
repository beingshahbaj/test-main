const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const form = document.querySelector(".form");

form.addEventListener("submit", addTodo);
function addTodo(event) {
  event.preventDefault();
  const newTodo = input.value.trim();

  if (newTodo) {
    const li = document.createElement("li");
    li.textContent = newTodo;
    li.style.border = "2px solid black";
    todoList.appendChild(li);
    li.addEventListener("click", (e) => {
      li.remove(e.target);
    });
    input.value = "";
  } else {
    console.log("Please enter a task!");
  }
}

const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //JavaScript 값이나 객체를 JSON 문자열(string)로 변환
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function doneToDo(event) {
    const li = event.target.parentElement;
    const liSpan = li.querySelector("span");
    const doneButton = li.querySelector("button");
    if (doneButton.innerText === "□") {
        doneButton.innerText = "■";
        liSpan.style.textDecoration = "line-through";
    } else {
        doneButton.innerText = "□";
        liSpan.style.textDecoration = "none";
    }
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const doneButton = document.createElement("button");
    doneButton.innerText = "□";
    doneButton.addEventListener("click", doneToDo);
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X"
    button.addEventListener("click", deleteToDo);
    li.appendChild(doneButton);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(e) {
    e.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); // JSON 문자열의 구문을 분석하고, 그 결과값으로 JavaScript 객체를 반환
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
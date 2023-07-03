// Selecting all Elements

const addTask = document.getElementsByClassName("btn-secondary")[0];
const input = document.getElementById("todo-input");
const cleanTodos = document.getElementsByClassName("btn-dark")[0];
const alertMessage = document.getElementsByClassName("alert-danger")[0];

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

document.addEventListener("DOMContentLoaded", function() {
    const ul = document.getElementById("ul");
    tasks.forEach(function(task) {
        let elem = document.createElement("li");
        let btn1 = document.createElement("button");
        let btn2 = document.createElement("button");

        btn1.innerHTML = '<i class="fa-sharp fa-solid fa-check"></i>';
        btn2.innerHTML = '<i class="fa-sharp fa-solid fa-trash"></i>';
        elem.innerText = task.name;

        ul.appendChild(elem);
        elem.appendChild(btn1);
        elem.appendChild(btn2);

        btn1.addEventListener("click", function() {
            elem.style.textDecoration = "line-through";
        });

        btn2.addEventListener("click", function() {
            elem.remove();
            tasks = tasks.filter(function(t) {
                return t.id !== task.id
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));
        });
    });
});

addTask.addEventListener("click", function() {
    const inputValue = input.value;

    if (inputValue === "") {
        alertMessage.style.display = "block";
        setTimeout(function() {
            alertMessage.style.display = "none";
        }, 5000);
        return;
    }

    const task = {
        id: Math.random() * 15,
        name: inputValue
    };

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    let elem = document.createElement("li");
    let btn1 = document.createElement("button");
    let btn2 = document.createElement("button");
    const ul = document.getElementById("ul");

    btn1.innerHTML = '<i class="fa-sharp fa-solid fa-check"></i>';
    btn2.innerHTML = '<i class="fa-sharp fa-solid fa-trash"></i>';
    
    elem.innerText = inputValue;

    ul.appendChild(elem);
    elem.appendChild(btn1);
    elem.appendChild(btn2);

    btn1.addEventListener("click", function() {
        elem.style.textDecoration = "line-through";
    });

    btn2.addEventListener("click", function() {
        elem.remove();
        tasks = tasks.filter(function(t) {
            return t.id !== task.id
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    });
    input.value = '';
});

cleanTodos.addEventListener("click", function(){
    
    const ul = document.getElementById("ul");
    ul.innerHTML = "";
    input.value = "";
    alertMessage.style.display = "none";
    tasks = [];
    localStorage.setItem('tasks', JSON.stringify(tasks));
});
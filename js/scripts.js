// Seleção de elementos
const totoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const totoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.getElementsByClassName("#edit-input");
const cancelEditeBtn = document.getElementById("#cancel-edit-btn");

// Funções

// Eventos
todoForm.addEventListener("submit", (e) => {

    e.preventDefault();

    console.log("Enviou form");

});
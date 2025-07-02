/* Random Word selector */
let list = ["Paige", "Hello!", "Banana", "Leave this page right now", "Idk", "Something"];
let random = Math.random();

window.onload = function() {
    let randomWord = Math.floor(Math.random() * list.length);
    document.getElementById("project1").textContent = list[randomWord];
};
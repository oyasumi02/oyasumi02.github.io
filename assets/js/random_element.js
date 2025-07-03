/* Random Word selector */
let list = ["Paige", "Hello!", "Banana", "Leave this page right now", "Idk", "Something"];
let random = Math.random();

window.onload = function() {
    let maxNum = 1000000;

    let randomWord = Math.floor(Math.random() * list.length);
    let randomNum = Math.floor(Math.random() * maxNum);

    document.getElementById("project1").textContent = list[randomWord];
    document.getElementById("number").textContent = randomNum.toString();
};
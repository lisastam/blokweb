// JavaScript Document
var pElement = document.querySelector("p");

var menu = document.querySelector("header ul li:last-child");
var nav = document.querySelector("main nav ul");

function navigatie() {
    nav.classList.toggle("nav");
}
menu.addEventListener("click", navigatie);
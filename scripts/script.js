// JavaScript Document
var pElement = document.querySelector("p");


var menu1 = document.querySelector("header ul li:nth-child(2)");
var menu2 = document.querySelector("header ul li:nth-child(3)");
var menu3 = document.querySelector("header ul li:last-child");

var shirt = document.querySelector("main img:nth-child(3)")

var nav = document.querySelector("main nav ul");

function navigatie() {
    nav.classList.toggle("nav");
    menu1.classList.toggle("kruisje1");
    menu2.classList.toggle("kruisje2");
    menu3.classList.toggle("kruisje3");
}
menu1.addEventListener("click", navigatie);
menu2.addEventListener("click", navigatie);
menu3.addEventListener("click", navigatie);

/*
function animatie() {
    shirt.classList.toggle("scrol")
}
shirt.addEventListener("scroll", animatie) */
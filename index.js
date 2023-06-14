const hamburger = document.querySelector(".hamburger")
const menu = document.querySelector(".menu-wrapper")
const hambBar = document.querySelector(".menu")

hamburger.addEventListener("click", function(){
    hamburger.classList.toggle("active")
    menu.classList.toggle("opened")
    hambBar.classList.toggle("relocate")
})
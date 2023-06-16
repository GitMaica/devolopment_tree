const cartNumber = document.querySelector("#cart-count")
let count = 0

const cartIncremment = () =>{
    count += 1
    cartNumber.innerText = count
}

const cartDecrement = () =>{
    if(cartNumber.innerText > 0)
        count -= 1
        cartNumber.innerText = count
}

const hamburger = document.querySelector(".hamburger")
const menu = document.querySelector(".menu-wrapper")
const hambBar = document.querySelector(".menu")

hamburger.addEventListener("click", function(){
    hamburger.classList.toggle("active")
    menu.classList.toggle("opened")
    hambBar.classList.toggle("relocate")
})
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

const openModal = document.querySelector(".open-loca-dial")
const dial = document.querySelector(".modal")
const closeModal = document.querySelector(".close-loca-dial")

openModal.addEventListener("click", () => {
    dial.show()
})

dial.addEventListener("click", (e) => {
    const dialDimentions = dial.getBoundingClientRect()
    if(
        e.clientX < dialDimentions.left ||
        e.clientX > dialDimentions.right ||
        e.clientY < dialDimentions.top ||
        e.clientY > dialDimentions.bottom
        ){
            dial.close()
        }
})
    
closeModal.addEventListener("click", () => {
        dial.close()
})

const hamburger = document.querySelector(".hamburger")
const menu = document.querySelector(".menu-wrapper")
const hambBar = document.querySelector(".menu")

hamburger.addEventListener("click", function(){
    hamburger.classList.toggle("active")
    menu.classList.toggle("opened")
    hambBar.classList.toggle("relocate")
})
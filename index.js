const opendial = document.querySelector(".open-loca-dial")
const openExpert = document.querySelector(".open-expert-dial")
const locaDial = document.querySelector(".loca-modal")
const expertDial = document.querySelector(".expert-dial")
const closedial = document.querySelector(".close-loca-dial")
const insideLocaDial = document.querySelector(".dialog-inside-wrapper")

opendial.addEventListener("click", () => {
    locaDial.show()
})

openExpert.addEventListener("click", () => {
    expertDial.show()
})

window.addEventListener("click", e => {
    const dialDimentions = locaDial.getBoundingClientRect()
    if(
        e.clientX < dialDimentions.left ||
        e.clientX > dialDimentions.right ||
        e.clientY < dialDimentions.top ||
        e.clientY > dialDimentions.bottom
    ) {
        locaDial.close()
    }
})

closedial.addEventListener("click", () => {
    locaDial.close()
})


window.addEventListener("click", e => {
    const dialDimentions2 = expertDial.getBoundingClientRect()
    if(
        e.clientX < dialDimentions2.left ||
        e.clientX > dialDimentions2.right ||
        e.clientY < dialDimentions2.top ||
        e.clientY > dialDimentions2.bottom
        ) {
            expertDial.close()
        }
    })
    
    
//* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const hamburger = document.querySelector(".hamburger")
const menu = document.querySelector(".menu-wrapper")
const hambBar = document.querySelector(".menu-btn")

hamburger.addEventListener("click", function(){
    const isOpened = hambBar.getAttribute('aria-expanded')

    if(isOpened === "true"){
        hambBar.setAttribute("aria-expanded", "false")
    } else{
        hambBar.setAttribute("aria-expanded", "true")
    }

    hamburger.classList.toggle("active")
    menu.classList.toggle("opened")
    hambBar.classList.toggle("relocate")
})


//* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const cartPlus = document.querySelectorAll(".cart-btn")
const cartNumber = document.querySelector("#cart-count")
let count = 0


const cartIncremment = () =>{
    count += 1
    cartNumber.textContent = count
}

const cartDecrement = () =>{
    if(cartNumber.textContent > 0)
        count -= 1
        cartNumber.textContent = count
}

for(let i=0; i<cartPlus.length; i++){
    cartPlus[i].addEventListener("click", function(){
        cartIncremment()
    })
}

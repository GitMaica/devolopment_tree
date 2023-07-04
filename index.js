const opendial = document.querySelector(".open-loca-dial")
const openExpert = document.querySelector(".open-expert-dial")
const locaDial = document.querySelector(".loca-dial")
const expertDial = document.querySelector(".expert-dial")
const useCurrent = document.querySelector(".current-loca")
const closeDial = document.querySelector(".click-to-close-loca-dial")
const closeExpDial = document.querySelector(".click-to-close-expert-dial")

opendial.addEventListener("click", () => {
    locaDial.show()
    locaDial.setAttribute("aria-hidden", "false")
})

openExpert.addEventListener("click", () => {
    expertDial.show()
    expertDial.setAttribute("aria-hidden", "false")
})

window.addEventListener("click", (e) => {
    const locaHidden = locaDial.getAttribute("aria-hidden")
    const dialDimentions = locaDial.getBoundingClientRect()
    const expertHidden = expertDial.getAttribute("aria-hidden")
    const dialDimentions2 = expertDial.getBoundingClientRect()

    if(locaHidden === "false"){
        if(
            e.clientX < dialDimentions.left + e.offsetX ||
            e.clientX > dialDimentions.right ||
            e.clientY < dialDimentions.top + e.offsetY ||
            e.clientY > dialDimentions.bottom
            ){
                locaDial.close()
                locaDial.setAttribute("aria-hidden", "true")
        }
    }
    else if(expertHidden === "false"){
        if(
            e.clientX < dialDimentions2.left + e.offsetX ||
            e.clientX > dialDimentions2.right ||
            e.clientY < dialDimentions2.top + e.offsetY ||
            e.clientY > dialDimentions2.bottom
            ) {
                expertDial.close()
                locaDial.setAttribute("aria-hidden", "true")
            }
    }
})

useCurrent.addEventListener("click", () => {
    locaDial.close()
    locaDial.setAttribute("aria-hidden", "true")
})


// ?>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// openExpert.addEventListener("click", () => {
//     expertDial.show()
//     expertDial.setAttribute("aria-hidden", "false")
// })


// window.addEventListener("click", e => {
//     const dialDimentions2 = expertDial.getBoundingClientRect()
//     if(
//         e.clientX < dialDimentions2.left + e.offsetX ||
//         e.clientX > dialDimentions2.right ||
//         e.clientY < dialDimentions2.top + e.offsetY ||
//         e.clientY > dialDimentions2.bottom
//         ) {
//             expertDial.close()
//             locaDial.setAttribute("aria-hidden", "true")
//         }
// })

//! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

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


//! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// TODO:remove const cartPlus = document.querySelectorAll(".cart-btn")
const cartNumber = document.querySelector("#cart-count")
const productBox = document.querySelector(".product-box")
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

// for(let i = 0; i < cartPlus.length; i++){
//     cartPlus[i].addEventListener("click", function(){
//     })
// }

productBox.addEventListener("click", (e) =>{
    const clickedBtn = e.target.classList.contains("cart-btn")
    if(clickedBtn){
        cartIncremment()
    }
})


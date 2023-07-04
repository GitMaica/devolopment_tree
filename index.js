const opendial = document.querySelector(".open-loca-dial")
const openExpert = document.querySelector(".open-expert-dial")
const locaDial = document.querySelector(".loca-dial")
const expertDial = document.querySelector(".expert-dial")
const useCurrent = document.querySelector(".current-loca")
const closeDial = document.querySelector(".click-to-close-loca-dial")
const closeExpDial = document.querySelector(".click-to-close-expert-dial")

opendial.addEventListener("click", () => {
    locaDial.show()
    // locaDial.setAttribute('aria-hidden', 'false')
})



window.addEventListener("click", (e) => {
    const dialDimentions = locaDial.getBoundingClientRect()
    // const dialDimentions2 = expertDial.getBoundingClientRect()

    // const dialHidden = locaDial.getAttribute('aria-hidden')
    // const expertHidden = expertDial.getAttribute('aria-hidden')


    // if(dialHidden === 'false'){
    if(
        e.clientX < dialDimentions.left ||
        e.clientX > dialDimentions.right ||
        e.clientY < dialDimentions.top ||
        e.clientY > dialDimentions.bottom
        ) {
            locaDial.close()
            // locaDial.setAttribute('aria-hidden', 'true')

        }
    // }
    // if(expertHidden ==='false'){
    //     if(
    //         e.clientX < dialDimentions2.left ||
    //         e.clientX > dialDimentions2.right ||
    //         e.clientY < dialDimentions2.top ||
    //         e.clientY > dialDimentions2.bottom
    //         ) {
    //             expertDial.close()
    //             expertDial.setAttribute('aria-hidden', 'true')
    //         }
    // }
})

closeDial.addEventListener("click", () =>{
    locaDial.close()
    // locaDial.setAttribute('aria-hidden', 'true')
})

useCurrent.addEventListener("click", () => {
    locaDial.close()
    // locaDial.setAttribute('aria-hidden', 'true')

})


// ?>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

openExpert.addEventListener("click", () => {
    expertDial.show()
    // expertDial.setAttribute('aria-hidden', 'false')

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

closeExpDial.addEventListener("click", () =>{
    expertDial.close()
    // expertDial.setAttribute('aria-hidden', 'true')
})

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


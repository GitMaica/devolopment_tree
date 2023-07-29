
const deliveryLocation = document.querySelector(".open-loca-dial")
const askAnExpert = document.querySelector(".open-expert-dial")
const locationDial = document.querySelector(".loca-dial")
const expertDial = document.querySelector(".expert-dial")
const useCurrent = document.querySelector(".current-loca")

const thridRow = document.querySelector(".third-row")
const hamburger = document.querySelector(".hamburger")
const menu = document.querySelector(".menu-wrapper")
const menuBtn = document.querySelector(".menu-btn")
const body = document.querySelector("body")


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

for(let i = 0; i < cartPlus.length; i++){
    cartPlus[i].addEventListener("click", function(){
    })
}

productBox.addEventListener("click", (e) =>{
    const clickedBtn = e.target.classList.contains("cart-btn")
    if(clickedBtn){
        cartIncremment()
    }
})


//! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


thridRow.addEventListener("click", (e) =>{
    if(e.target.classList.contains("open-loca-dial")){
        locationDial.show()
        locationDial.setAttribute("aria-hidden", "false")
        body.style.overflow = "hidden"
    }
    else if(e.target.classList.contains("open-expert-dial")){
        expertDial.show()
        expertDial.setAttribute("aria-hidden", "false")
        body.style.overflow = "hidden"
    }
})

body.addEventListener("click", (e) => {
    const locaHidden = locationDial.getAttribute("aria-hidden")
    const locatDimentions = locationDial.getBoundingClientRect()
    const expertHidden = expertDial.getAttribute("aria-hidden")
    const expertDimentions = expertDial.getBoundingClientRect()


    if(locaHidden === "false"){
        if(
            e.clientX < locatDimentions.left + e.offsetX ||
            e.clientX > locatDimentions.right ||
            e.clientY < locatDimentions.top + e.offsetY ||
            e.clientY > locatDimentions.bottom
            ){
                locationDial.close()
                locationDial.setAttribute("aria-hidden", "true")
                body.style.overflow = "auto"
            }
    }
    else if(expertHidden === "false"){
        if(
            e.clientX < expertDimentions.left + e.offsetX ||
            e.clientX > expertDimentions.right ||
            e.clientY < expertDimentions.top + e.offsetY ||
            e.clientY > expertDimentions.bottom
            ) {
                expertDial.close()
                expertDial.setAttribute("aria-hidden", "true")
                body.style.overflow = "auto"
            }
        }
})
    
useCurrent.addEventListener("click", () => {
    locationDial.close()
    locationDial.setAttribute("aria-hidden", "true")
    body.style.overflow = "auto"
})


//! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

document.onclick = function(e){
    if(e.target.id !== "menu-bar" && e.target.id !== "hamburger-icon"){
        hamburger.classList.remove("active")
        menu.classList.remove("opened")
        menuBtn.classList.remove("relocate")

        menuBtn.setAttribute("aria-hidden", "true")
        menuBtn.setAttribute("aria-expanded", "false")

        body.style.overflow = "auto"
    }
}

menuBtn.onclick = function(){    
    hamburger.classList.toggle("active")
    menu.classList.toggle("opened")
    menuBtn.classList.toggle("relocate")

    if(menuBtn.classList.contains("relocate")){
        menuBtn.setAttribute("aria-expanded", "true")
        menuBtn.setAttribute("aria-hidden", "false")
        body.style.overflow = "hidden"
    }else{
        menuBtn.setAttribute("aria-expanded", "false")
        menuBtn.setAttribute("aria-hidden", "true")
        body.style.overflow = "auto"
    }    
}

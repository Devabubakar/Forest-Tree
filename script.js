const dimmedBg = document.getElementById("dimmed-bg")
const landingContent =document.getElementById("landing-content")
const fullpage =document.getElementById("fullsite")
const aside = document.getElementById("sidebar")
const content = document.getElementById("camp-content")
const visible = document.querySelector("#visible-section")
const x = window.matchMedia("(max-width:980px)")
const mobi = document.getElementById("mobi")
const y = document.querySelector("#mylinks")
const hamburger = document.getElementById("hamburger-menu")

function enterPage(){
    dimmedBg.style.visibility = "visible"
    dimmedBg.style.transform ="translate(0)"
    landingContent.style.transform  = "translate(-120vw)"
    fullpage.style.visibility = "visible"
    fullpage.style.transform = "translate(0)"
    fullpage.style.maxHeight = "auto"
    aside.style.transform ="translate(0)"
    if(x.matches){
        mobi.style.visibility = "visible"
    }else{
        mobi.style.visibility = "hidden"
    }
    
  
}

function mobileview(x){
    if(x.matches){
        aside.style.visibility= "hidden"
    }else{
        aside.style.visibility = "visible"

    }
    const hi = document.querySelector("h3")
if (x.matches){
    hi.style.fontSize = "2rem"

}else{
    hi.style.fontSize = "5rem"
}




}
mobileview(x)
x.addListener(mobileview)


function enterSide(){
    aside.style.transform = "translate(-456px)"
    content.style.transform = "translate(-150vw)"
    visible.style.opacity = "0"

}

function leaveSide(){
    aside.style.transform = "translate(0)"
    content.style.transform = "translate(0)"
    visible.style.opacity = "1"
}

function hamburgerMenu(){
    if(y.style.display === "flex"){
        y.style.display = "none"
    }else{
        y.style.display = "flex"
    }
  
 
}


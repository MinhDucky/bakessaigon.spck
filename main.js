let nav = document.getElementById("nav")

window.addEventListener('scroll', function() {
    console.log(window.scrollY)
    if(window.scrollY > 10){
        
        console.log("scroll")
        nav.style.top = "0"
        nav.style.marginTop = '-10px'
        nav.style.backgroundColor = "white"
        nav.style.backdropFilter = "blur(5px)"

    }
    else{
        nav.style.backgroundColor = "white"
        nav.style.marginTop = "20px"

    }
}
)
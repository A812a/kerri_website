

var navbar = document.getElementById('nav-active')
var backToTop = document.querySelector('.backToTop')

window.onscroll = function() {

    if(window.scrollY >= 651) {
        navbar.style.backgroundColor = "rgba(0,0,0,0.8)";  
        navbar.style.padding = "15px 25px";  
        if(window.scrollY >= 751) {
            backToTop.classList.add('d-block')
            backToTop.classList.remove('d-none')
        } else {
            backToTop.classList.add('d-none')
            backToTop.classList.remove('d-block')
        }
    } else {
        navbar.style.backgroundColor = "transparent";  
        navbar.style.padding = "8px";  
    }
}

backToTop.onclick = function() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}

// transparent
// Navbar
let navbar = document.querySelector('.nav')
let nav_links = document.querySelector('.nav__links')
let nav_menu = document.querySelector('.nav__menu')

let about_button = document.querySelector('.about-btn')
let mobile_about_hover = document.querySelector('.mobile-about__hover')

// Navbar
nav_menu.addEventListener('click', ()=>{
    nav_links.classList.toggle('active')
})

about_button.addEventListener('click', ()=>{
    mobile_about_hover.classList.toggle('open')
    nav_links.classList.toggle('open-nav__links')
})
// Navbar
let navbar = document.querySelector('.nav')
let nav_links = document.querySelector('.nav__links')
let nav_menu = document.querySelector('.nav__menu')
// Pricing
let openbtns = document.querySelectorAll('.openbtn')
// Callback
let form_message = document.querySelector('.form__message') 
let closebtn = document.querySelector('.callback__section__closebtn')
let callback = document.querySelector('.callback')
let submitbtn = document.getElementById('submit')
const formName = document.getElementById('name')
const formNumber = document.getElementById('number')
// About
let about_button = document.querySelector('.about-btn')
let mobile_about_hover = document.querySelector('.mobile-about__hover')

// Navbar
nav_menu.addEventListener('click', ()=>{
    console.log(nav_links);
    nav_links.classList.toggle('active')
})

// Pricing
for (let i = 0; i < openbtns.length; i++) {
    openbtns[i].onclick = ()=>{
        callback.style.display = 'flex'
    }
}
// Callback
submitbtn.addEventListener('click', ()=>{
    let x = document.getElementById('name').value
    // sendEmail()
    console.log(x);
        if (x == ""){
            return false
        }
        else{
            form_message.innerHTML = 'Your message was sent successfully'
        }
})
closebtn.onclick = ()=>{
    callback.style.display = 'none' 
    form_message.innerHTML = ''
}
about_button.addEventListener('click', ()=>{
    mobile_about_hover.classList.toggle('open')
    nav_links.classList.toggle('open-nav__links')
    console.log('sd');
})

// function sendEmail(){
//     console.log('hi');
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "artrurkaceli15@gmail.com",
//         Password : "petulla12345",
//         To : 'arturkaceli16@gmail.com',
//         From : formName.value,
//         Subject : "This is the subject",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );
// }
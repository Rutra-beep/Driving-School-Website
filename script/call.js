let call = document.querySelector(".call");
let openbtn = document.querySelector(".call_phone");
let phone_icon = document.querySelector(".call__icon");
let close_btn = document.querySelector("#closebtn");
let hidden = document.querySelector(".call__hidden");
let user = document.querySelector(".user");
let arrow = document.querySelector(".arrow");
let hidden_socials = document.querySelector('.call__hidden__socials');

// Open Button(Phone icon) 
openbtn.addEventListener("click", () => {
  call.style.width = "270px";
  if (hidden_socials.classList.contains('active')) {
    call.classList.toggle('active-300')
    call.classList.remove('active-220')
  }
  else{
    call.classList.toggle('active-220')
  }
  phone_icon.style.display = "none";
  hidden.style.display = "flex";
  setTimeout(() => {
    user.style.opacity = "1";
  }, 100);
  setTimeout(() => {
    arrow.style.opacity = "1";
  }, 200);
  openbtn.style.display = "none";
});

// Close Button
close_btn.addEventListener("click", () => {
  call.classList.remove('active-220')
  call.classList.remove('active-300')
  call.classList.toggle('active-80')
  setTimeout(() => {
    call.style.width = "80px";
  }, 80);
  phone_icon.style.display = "block";
  hidden.style.display = "none";
  user.style.opacity = "0";
  arrow.style.opacity = "0";
});

// Arrow
arrow.addEventListener('click', ()=>{
  console.log('arrow');
  hidden_socials.classList.toggle('active')
  call.classList.toggle('active-300')
  call.classList.toggle('active-220')

  arrow.classList.toggle('rotate')
})

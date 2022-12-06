let call = document.querySelector(".call");
let openbtn = document.querySelector(".call_phone");
let phone_icon = document.querySelector(".call__icon");
let close_btn = document.querySelector("#closebtn");
let hidden = document.querySelector(".call__hidden");
let user = document.querySelector(".user");
let arrow = document.querySelector(".arrow");

openbtn.addEventListener("click", () => {
    call.style.width = "270px";
    call.style.height = "220px";
    phone_icon.style.display = "none";
    hidden.style.display = "flex";
    setTimeout(() => {
      user.style.opacity = "1";
  }, 100);
    setTimeout(() => {
      arrow.style.opacity = "1";
  }, 200);
});

close_btn.addEventListener("click", () => {
  console.log("hi");
  call.style.height = "80px";
  setTimeout(()=>{
      call.style.width = "80px";
  }, 80)
  phone_icon.style.display = "block";
  hidden.style.display = "none";
  user.style.opacity = '0'
  arrow.style.opacity = '0'
});

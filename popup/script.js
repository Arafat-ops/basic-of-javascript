const open_btn = document.querySelector("#open") //open
const close_btn = document.querySelector("#close") //close
const po = document.querySelector(".popup") //popup
open_btn.addEventListener("click", () => {
    po.classList.add("active")
})
close_btn.addEventListener("click", () => {
    po.classList.remove("active")
})
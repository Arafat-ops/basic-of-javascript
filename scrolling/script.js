const menuBtn = document.getElementById("menu-bar")
const links = document.querySelector(".nav-container ul")
links.classList.toggle("showNav")
menuBtn.addEventListener("click", (e) => {
    links.classList.toggle("showNav")
    console.log(links.classList)
})
const nav = document.querySelector(".nav")
window.addEventListener("scroll", () => {
    nav.style.position = "sticky"
    nav.style.top = "0px"
    nav.style.backgroundColor = "white"
    nav.style.overflow = "hidden"
    nav.style.zIndex = 1
})
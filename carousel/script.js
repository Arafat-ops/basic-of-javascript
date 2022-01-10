let imgs = document.querySelectorAll(".imgContainer img")
const container = document.querySelector(".imgContainer ")
let index = 0

function moveLeft() {
    index++
    if (index > imgs.length - 1) {
        index = 0
    }
    container.style.transform = ` translateX(${-index*300}px)`
}
setInterval(moveLeft, 2000)
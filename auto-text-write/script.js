let text = "my name is Arafat"
let container = document.querySelector(".container")
let index = 0

function autoWrite() {
    container.innerHTML = text.slice(0, index)
    index++
    if (index > text.length - 1) {
        index = 0
    }
}
setInterval(autoWrite, 100)
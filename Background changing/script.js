const btn = document.querySelector("button") //btn=button
btn.addEventListener("click", () => {
    document.body.style.background = randomColor()
    console.log(randomColor());
})

function randomColor() {
    return `hsl(${Math.floor(Math.random()*360)},100%,50%)`
}
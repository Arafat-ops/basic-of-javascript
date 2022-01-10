function createHeart() {
    let heart = document.createElement("div")
    heart.classList.add("heart")
    heart.innerText = "❤️"
    document.body.appendChild(heart)
    heart.style.left = Math.random() * 100 + "vw"
    heart.style.animationDuration = `${Math.random()*((5-2)+1)+2}s`
}
setInterval(createHeart, 100)
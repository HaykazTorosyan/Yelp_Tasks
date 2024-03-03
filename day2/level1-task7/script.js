const btn = document.getElementById("btn")
const text = document.getElementById("text")

const changeText = function(){
    btn.innerHTML = btn.innerHTML === "Hide" ? "Show" : "Hide"
    text.style.display = text.style.display === 'none' ? 'block' : 'none'
}
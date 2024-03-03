const button = document.getElementById("222")
const p = document.getElementById("111")

let boo = true
button.addEventListener("click",function(){
    p.innerHTML = boo? "bay" : "hello";
    boo = !boo
})
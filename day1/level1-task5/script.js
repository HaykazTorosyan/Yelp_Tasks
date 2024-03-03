(function(window, document, undefined) {
    
const blackButn = document.querySelector(".color1");
const redButton =  document.querySelector(".color2");
const greenButon =  document.querySelector(".color3");
    
blackButn.addEventListener("click",() => {
    const blckBtn = window.getComputedStyle(blackButn).color;
    document.body.style.backgroundColor = blckBtn;
})


redButton.addEventListener("click",() =>{
    const redButonColor = window.getComputedStyle(redButton).color;
    document.body.style.backgroundColor = redButonColor
})


greenButon.addEventListener("click", ()=>{
    const greenButonColor = window.getComputedStyle(greenButon).color;
    document.body.style.backgroundColor = greenButonColor
})
})(window, document)


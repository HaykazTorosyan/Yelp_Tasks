       
(function(window, document, undefined) {
    "use strict"
    const text = document.querySelector(".my-text")
          text.addEventListener("click", ()=>{
            if(text.textContent === "Hello"){
                text.textContent = "goodbay"
            } else {
                text.textContent = "Hello"
            }

          })
})(window, document)

(function(window, document, undefined) {
    const showButton = document.querySelector(".show-button")
    showButton.addEventListener("click",() => {
        const showDiv = document.querySelector(".div-text")
        showDiv.classList.toggle('hiden')
    })

})(window, document)

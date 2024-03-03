(function(window,document,undefined) {
    const ok = document.querySelector(".ok");
    let input = document.querySelector(".email");
    ok.addEventListener("click", () => {
        let inputValue = input.value;
        if(!inputValue.includes('email.com')){
            alert('enter real email');
        }
    })
})(window, document)
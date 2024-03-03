(function(window, document, undefined) {
    const button = document.querySelector('.btn');
    let i = 1;
    let h1 = document.querySelector('.counter');
    button.addEventListener('click', () => {
        h1.textContent = i;
        i++;
    })
})(window, document)
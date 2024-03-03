(function(window, document,undefined) {
    const tabObj = {
        tab1: "Tab1 text",
        tab2: "Tab2 text",
        tab3: "Tab3 text",
    }
    const tab1 = document.querySelector('.Tab1');
    const tab2 = document.querySelector('.Tab2');
    const tab3 = document.querySelector('.Tab3');
    const paragraph = document.querySelector('.paragraph');
    tab1.addEventListener("click", () => {
        paragraph.textContent = tabObj['tab1'];
    });
    tab2.addEventListener("click", () => {
        paragraph.textContent = tabObj['tab2'];
    });
    tab3.addEventListener("click", () => {
        paragraph.textContent = tabObj['tab3'];
    });
})(window,document);
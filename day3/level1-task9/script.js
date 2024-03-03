(function(window,document,undefined){
  const button = document.querySelector(".enter");
  let inp = document.querySelector(".email");
  button.addEventListener("click",() => {
    let inputValue = inp.value;
    if(inputValue == '') {
        alert('Please Enter Email');
    }
  })
})(window,document)
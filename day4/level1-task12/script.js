const images = [
    "./photo/download-1.jpg",
    "./photo/download-2.jpg",
    "./photo/download-3.jpg",
    "./photo/download.jpg",
];


const currentPhoto = document.querySelector(".current-photo");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
let photold = 0;

currentPhoto.src = images[photold];
nextButton.addEventListener("click", () => {
    if(photold < images.length-1){
        photold += 1;
        currentPhoto.src = images[photold]
    }
});
prevButton.addEventListener("click", () => {
    if(photold > 0){
        photold -= 1;
        currentPhoto.src = images[photold]
    }
});
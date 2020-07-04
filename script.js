// Select required elements

const thumbImages = document.querySelectorAll(".thumb-img");
const popBox = document.querySelector(".popup-box");
const popImage = document.querySelector(".popup-img");
const popImageCaption = document.querySelector(".popup-caption");

thumbImages.forEach(singleThumb => {
    singleThumb.addEventListener("click", function(e){
        popBox.classList.add("popped");
        const clickedFullImage = singleThumb.getAttribute("data-full");
        const clickedImageCpt = singleThumb.alt;
        popImage.src = clickedFullImage;
        popImageCaption.innerHTML = clickedImageCpt;
    });
});

popBox.addEventListener("click", function(e){
    if(e.target.classList.contains('popup-box')){
        popBox.classList.remove("popped");
    }
});
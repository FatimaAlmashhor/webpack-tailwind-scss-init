let index = 0;
let preInde = 0;
window.setInterval(slider, 2800);
function slider() {
    // setTimeout(this, 60000);
    const slider = document.querySelectorAll('.hero_mainImg_images-slider > *');

    if (index > 2 || index === 0) {
        index = 0
        preInde = 2;
    }
    else {
        preInde = index - 1;
    }
    console.log(slider[index].className);
    console.log(preInde);
    // setTimeout(() => {
    slider[preInde].className = 'hero_mainImg_images-slider_item'
    slider[index].className += ' active';
    // }, 6000)
    index++;
}
// slider();
// function plusSlides(n) {
//     clearInterval(myTimer);
//     if (n < 0) {
//         showSlides(slideIndex -= 1);
//     } else {
//         showSlides(slideIndex += 1);
//     }
//     if (n === -1) {
//         myTimer = setInterval(function () { plusSlides(n + 2) }, 4000);
//     } else {
//         myTimer = setInterval(function () { plusSlides(n + 1) }, 4000);
//     }
// }
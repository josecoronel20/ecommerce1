const carousel = document.querySelector(".carousel");
const preArrow = document.querySelector(".preArrow");
const nextArrow = document.querySelector(".nextArrow");

carousel.forEach((item,i) => {
    let carouselDimensions = item.getBoundingClientRect();
    let carouselWidth = carouselDimensions.width;

    // scrollToRight = () => {
    //     item.scrollLeft += carouselWidth;
    // }

    // scrollToLeft = () => {
    //     item.scrollLeft -= carouselWidth;
    // }

    nextArrow[i].addEventListener("click",() => {
        item.scrollLeft += carouselWidth;})

    preArrow[i].addEventListener("click", () => {
        item.scrollLeft -= carouselWidth;})

    })

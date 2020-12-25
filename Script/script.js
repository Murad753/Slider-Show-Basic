
// Slider-Show Method-1

// 'use strict'

// var mySlider = [
//     "image/1.jpg",
//     "image/2.jpg",
//     "image/3.jpg",
//     "image/4.jpg"
// ]

// var currentSlide = 0;
// var img = document.getElementsByClassName("img")[0];
// img.src = mySlider[currentSlide]

// var prew = document.querySelector(".prew");
// var next = document.querySelector(".next");

// prew.onclick = function(){
//     currentSlide--;
//     if(currentSlide == -1){
//         currentSlide = mySlider.length - 1;
//     }
//     img.src = mySlider[currentSlide]
// }

// next.onclick = function(){
//     currentSlide++;
//     if(currentSlide == mySlider.length){
//         currentSlide = 0;
//     }
//     img.src = mySlider[currentSlide]
// }


// Slider-Show Method-2

'use strick'

var mySlider = [
    "image/1.jpg",
    "image/2.jpg",
    "image/3.jpg",
    "image/4.jpg",
]

var currentSlide = 0;
var img = document.getElementsByClassName("img")[0]
img.src = mySlider[currentSlide]

var prew = document.querySelector(".prew");
var next = document.querySelector(".next");

prew.onclick = function() {
    currentSlide = (currentSlide - 1 + mySlider.length) % mySlider.length;
    img.src = mySlider[currentSlide]
}

next.onclick = function() {
    currentSlide = (currentSlide + 1 + mySlider.length) % mySlider.length;
    img.src = mySlider[currentSlide]
}






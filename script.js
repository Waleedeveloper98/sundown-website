const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function page4Anim(){
    var fixedImage = document.querySelector('#fixed-image');
var container = document.querySelector("#elem-container")
container.addEventListener("mouseenter", function(){
    fixedImage.style.display = "block";
})
container.addEventListener("mouseleave", function(){
    fixedImage.style.display = "none";
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        var image = elem.getAttribute("data-image")
        fixedImage.style.backgroundImage = `url(${image})`;
    })
})
}

function swiper(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}



function menuAnim(){
    var manu = document.querySelector("nav h3")
var fullScreen = document.querySelector("#full-scr")
var navImg = document.querySelector("nav img")
var flag = 0
manu.addEventListener("click", function(){
    if(flag === 0){
        fullScreen.style.top = "10%"
    navImg.style.opacity = 0
    flag = 1
    }else{
        fullScreen.style.top = "-100%"
        navImg.style.opacity = 1
        flag = 0
    }
})

}


function loaderAnim(){
    var loader = document.querySelector("#loader")
setTimeout(() => {
    loader.style.top = "-100%"
}, 4000);
}

page4Anim()
swiper()
menuAnim()
loaderAnim()
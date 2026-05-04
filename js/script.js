//   header active
  
  var headerBtnRight = document.querySelector("#header__btn__right");
  var header__blur = document.querySelector(".header__blur");
  var btnTop = document.querySelector("#btnTop");

  window.onscroll = function () {

    let scroll = document.documentElement.scrollTop;

    if(scroll > 10){
        headerBtnRight.classList.add("headerBtnRightActive");
        header__blur.classList.add("headerActive");
    }
    else if(scroll < 10){
        headerBtnRight.classList.remove("headerBtnRightActive");
        header__blur.classList.remove("headerActive");
    }

    if(scroll > 500){
        btnTop.style.transform = "scale(1)"
    }
    else if(scroll < 500){
        btnTop.style.transform = "scale(0)"
    }
  }

// mn responsive

var iconMn = document.querySelector(".icon__mn");  
var iconMnSpan = document.querySelectorAll(".icon__mn__span");
var secMnResponsive = document.querySelector(".sec__mn__responsive");
var secMnResponsiveUl = document.querySelector(".sec__mn__responsiveUl");

iconMn.addEventListener("click", () => {
    iconMnSpan[0].classList.toggle("iconMnSpanActive0");
    iconMnSpan[1].classList.toggle("iconMnSpanActive1");
    iconMnSpan[2].classList.toggle("iconMnSpanActive2");
    secMnResponsive.classList.toggle("secMnResponsiveActive");
    secMnResponsiveUl.classList.toggle("secMnResponsiveUlActive");

})

// proyectos

var controls1 = document.querySelector("#controls1");
var controls2 = document.querySelector("#controls2");
var sliderProyect = document.querySelector("#sliderProyect");
var sliderProyectLi1 = document.querySelector("#sliderProyectLi1");
var sliderProyectLi2 = document.querySelector("#sliderProyectLi2");



controls2.addEventListener("click", (e) => {
    sliderProyect.classList.add("sliderProyectActive");
    sliderProyectLi2.classList.add("opacity1");
    sliderProyectLi1.classList.add("opacity0");
    controls2.classList.add("controlActive");
    controls1.classList.add("controlDesactive");
})

controls1.addEventListener("click", (e) => {
    sliderProyect.classList.remove("sliderProyectActive");
    sliderProyectLi2.classList.remove("opacity1");
    sliderProyectLi1.classList.remove("opacity0");
    controls2.classList.remove("controlActive");
    controls1.classList.remove("controlDesactive");
})

let hamburger = document.querySelector('.hamburger'); //Переменная в которую попала кнопка с классом гамбургер.
let nav = document.querySelector("nav");
let homeLink = document.querySelector(".home-link");
let showcaseLink = document.querySelector(".showcase-link");
let servicaseLink = document.querySelector(".servicase-link");
let disignersLink = document.querySelector(".disigners-link");
let packagesLink = document.querySelector(".packages-link");
let contactLink = document.querySelector(".contact-link");
hamburger.onclick = function(){ //При нажатии на кнопку запускается функция.
    hamburger.classList.toggle("hamburger_active"); //Переключаем класс(если нету добовляем,если есть удоляем).
    nav.classList.toggle("nav_active");
}
homeLink.onclick = function(){
    hamburger.classList.remove("hamburger_active"); //
    nav.classList.remove("nav_active");
}
showcaseLink.onclick = function(){
    hamburger.classList.remove("hamburger_active"); //
    nav.classList.remove("nav_active");
}
servicaseLink.onclick = function(){
    hamburger.classList.remove("hamburger_active"); //
    nav.classList.remove("nav_active");
}
disignersLink.onclick = function(){
    hamburger.classList.remove("hamburger_active"); //
    nav.classList.remove("nav_active");
}
packagesLink.onclick = function(){
    hamburger.classList.remove("hamburger_active"); //
    nav.classList.remove("nav_active");
}
contactLink.onclick = function(){
    hamburger.classList.remove("hamburger_active"); //
    nav.classList.remove("nav_active");
}